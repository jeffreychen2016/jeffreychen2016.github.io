const printBlogs = (blogData) => {
  let domString = '';
  for (let i = 0; i < blogData.length; i++) {
    domString += `<div>`;
    domString +=  `<h2 class="float-left">${blogData[i].title}</h2>`;
    // domString += `<p class="float-right">${blogData[i].date}</p>`;
    domString +=  `<div class="btn-group float-right" role="group" aria-label="...">`;
    domString +=    `<button type="button" class="btn btn-default"><span class='glyphicon glyphicon-plus'></span>Add</button>`;
    domString +=    `<button type="button" class="btn btn-default"><span class='glyphicon glyphicon-pencil'></span>Edit</button>`;
    domString +=    `<button type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>Delete</button>`;
    domString +=  `</div>`;
    domString +=  `<p class="clear-float">${blogData[i].post}</p>`;
    domString += `</div>`;
  }
  $('#blog-container').html(domString);
};

module.exports = {
  printBlogs,
};
