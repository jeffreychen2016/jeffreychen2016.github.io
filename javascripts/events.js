const firebaseAPI = require('./firebaseAPI');
const dom = require('./dom');

const hideOtherPages = (activePage) => {
  $('#resume-page').hide();
  $('#project-page').hide();
  $('#blog-page').hide();
  $('#contact-page').hide();
  $(`#${activePage}`).show();
};

const currentPageIndicator = (activePage) => {
  $('#resume-page-link').removeClass('current-page');
  $('#project-page-link').removeClass('current-page');
  $('#blog-page-link').removeClass('current-page');
  $('#contact-page-link').removeClass('current-page');
  $(`#${activePage}-link`).addClass('current-page');
};

const navigatePageEvent = () => {
  $(document).on('click', (e) => {
    if (e.target.id === 'resume-page-link') {
      hideOtherPages('resume-page');
      currentPageIndicator('resume-page');
    } else if (e.target.id === 'project-page-link') {
      hideOtherPages('project-page');
      currentPageIndicator('project-page');
    } else if (e.target.id === 'blog-page-link') {
      hideOtherPages('blog-page');
      currentPageIndicator('blog-page');
    } else if (e.target.id === 'contact-page-link') {
      hideOtherPages('contact-page');
      currentPageIndicator('contact-page');
    };
  });
};

/* ----------------------- Blog Section --------------------- */
// GET
// Get blog data from database and display on the page
const getBlogs = () => {
  firebaseAPI.getBlogsFromDB()
    .then((blogData) => {
      dom.printBlogs(blogData);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getBlogsFromDBEvent = () => {
  $(document).on('click', '#blog-page-link', () => {
    getBlogs();
  });
};

// POST
// Post new blog entry to the database
const postBlogToDBEvent = () => {
  $(document).on('click', '#btn-post-blog', (e) => {
    e.preventDefault();
    const blogToPost = {
      id: 1,
      title: $('#input-blog-title-add').val(),
      post: $('#input-blog-content-add').val(),
      date: '2018-01-01',
    };

    firebaseAPI.postBlogToDB(blogToPost)
      .then((uniqueKey) => {
        console.log('Blog Posted');
        getBlogs();
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

// DELETE
// Delete blog from database
const delelteBlogFromDBEvent = () => {
  $(document).on('click', '.btn-delete-blog', (e) => {
    const blogIdToDelete = $(e.target).closest('.blog-card').data('firebaseId');
    firebaseAPI.delelteBlogFromDB(blogIdToDelete)
      .then(() => {
        console.log('Deleted');
        getBlogs();
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

// UPDATE
// Edit the existing blog in database
let blogIdForUpdate = '';

const getBlogIdForUpdateEvent = () => {
  $(document).on('click', '.btn-edit-blog', (e) => {
    blogIdForUpdate = $(e.target).closest('.blog-card').data('firebaseId');
  });
};

const updateBlogInDBEvent = () => {
  $(document).on('click', '#btn-edit-blog', (e) => {
    e.preventDefault();
    const blogIdToUpdate = blogIdForUpdate;
    const blogToUpdate = {
      id: 1,
      title: $('#input-blog-title-edit').val(),
      post: $('#input-blog-content-edit').val(),
      date: '2018-01-01',
    };

    firebaseAPI.updateBlogInDB(blogToUpdate, blogIdToUpdate)
      .then(() => {
        getBlogs();
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

/* ----------------------- Project Section --------------------- */
// GET
// Get project data from database and display on the page
const getProjects = () => {
  firebaseAPI.getProjectsFromDB()
    .then((projectData) => {
      dom.printProjects(projectData);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getProjectsFromDBEvent = () => {
  $(document).on('click', '#project-page-link', () => {
    getProjects();
  });
};

/* ----------------------- Authentication --------------------- */
const authenticationEvent = () => {
  // sign in
  $(document).on('click', '#btn-admin-signin', (e) => {
    e.preventDefault();

    const email = $('#signin-email').val();
    const pass = $('#signin-password').val();
    // calling auth services of firebase
    // pass in email and password
    // firebase will return a promise
    firebase.auth().signInWithEmailAndPassword(email, pass)
      // not using returned user object
      // do not need .then here since it is managed by the auth state changing
      // in checkLoginStatus *******
      .then((user) => {
        // Sign-in successful.
        // move this code to auth module -------
      })
      .catch((error) => {
        // Handle Errors here. When get error on sign-in
        // var errorCode = error.code;
        const errorMessage = error.message;
        $('#signin-error').removeClass('hide').hide().fadeIn(600);
        $('#signin-error-msg').text(errorMessage);
      });
  });

  // sign out
  $(document).on('click', '#btn-admin-signout', (e) => {
    firebase.auth().signOut()
      .then(() => {
        // Sign-out successful.
        // move this code to auth module -------
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

module.exports = {
  getBlogsFromDBEvent,
  navigatePageEvent,
  postBlogToDBEvent,
  delelteBlogFromDBEvent,
  updateBlogInDBEvent,
  getBlogIdForUpdateEvent,
  getProjectsFromDBEvent,
  authenticationEvent,
};
