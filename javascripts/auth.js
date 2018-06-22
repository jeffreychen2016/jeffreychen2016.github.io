const switchLoginToSignout = () => {
  let bodyString = '';
  bodyString += `<label>You are cerrently signed in as administrator</label>`;
  $('#myModal-admin .modal-body').html(bodyString);
  $('#myModal-admin .modal-body').addClass('text-center');

  let footerString = '';
  footerString += `<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>`;
  footerString += `<button type="submit" class="btn btn-primary" id="btn-admin-signout">Sign Out</button>`;
  $('#myModal-admin .modal-footer').html(footerString);
  $('#myModal-admin').modal('hide');
};

const switchSignoutToLogin = () => {
  let bodyString = '';
  bodyString += `<form>`;
  bodyString +=   `<div class="form-group">`;
  bodyString +=     `<label for="signin-email">Email address</label>`;
  bodyString +=     `<input type="email" class="form-control" id="signin-email" placeholder="Email">`;
  bodyString +=   `</div>`;
  bodyString +=   `<div class="form-group">`;
  bodyString +=     `<label for="signin-password">Password</label>`;
  bodyString +=     `<input type="password" class="form-control" id="signin-password" placeholder="Password">`;
  bodyString +=   `</div>`;
  bodyString +=   `<div id="signin-error" class="alert alert-danger hide" role="alert">`;
  bodyString +=     `<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>`;
  bodyString +=     `<span class="sr-only">Error:</span>`;
  bodyString +=     `<span id="signin-error-msg"></span>`;
  bodyString +=   `</div>`;
  bodyString += `</form>`;
  $('#myModal-admin .modal-body').html(bodyString);

  let footerString = '';
  footerString += `<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>`;
  footerString += `<button type="submit" class="btn btn-primary" id="btn-admin-signin">Sign In</button>`;
  $('#myModal-admin .modal-footer').html(footerString);
  $('#myModal-admin').modal('hide');
};

const displayButtonsForBlog = () => {
  let domString = '';
  domString += `<button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal-add"><span class='glyphicon glyphicon-plus'></span>Add</button>`;
  domString += `<button type="button" class="btn btn-default btn-edit-blog" data-toggle="modal" data-target="#myModal-edit"><span class='glyphicon glyphicon-pencil'></span>Edit</button>`;
  domString += `<button type="button" class="btn btn-default btn-delete-blog"><span class='glyphicon glyphicon-trash'></span>Delete</button>`;
  $('.btn-group-blog').html(domString);
};

const removeButtonsFromBlog = () => {
  $('.btn-group-blog').html('');
};

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      // move it from log in event *******
      switchLoginToSignout();
      displayButtonsForBlog();
    } else {
      // No user is signed in.
      // move it from log out event ------
      switchSignoutToLogin();
      removeButtonsFromBlog();
    };
  });
};

module.exports = {
  checkLoginStatus,
};
