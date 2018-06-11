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
  $(document).on('click',(e) => {
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
  $(document).on('click','#blog-page-link', () => {
    getBlogs();
  });
};

// POST
// Post new blog entry to the database
const postBlogToDBEvent = () => {
  $(document).on('click','#btn-post-blog', (e) => {
    e.preventDefault();
    const blogToPost = {
      id: 1,
      title: $('#input-blog-title').val(),
      post: $('#input-blog-content').val(),
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
  $(document).on('click','.btn-delete-blog', (e) => {
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

module.exports = {
  getBlogsFromDBEvent,
  navigatePageEvent,
  postBlogToDBEvent,
  delelteBlogFromDBEvent,
};
