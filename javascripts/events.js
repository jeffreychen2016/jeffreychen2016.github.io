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
const getBlogsFromDBEvent = () => {
  $(document).on('click','#blog-page-link', () => {
    firebaseAPI.getBlogsFromDB()
      .then((blogData) => {
        dom.printBlogs(blogData);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

module.exports = {
  getBlogsFromDBEvent,
  navigatePageEvent,
};
