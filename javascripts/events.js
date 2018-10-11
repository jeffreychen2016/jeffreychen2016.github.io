const firebaseAPI = require('./firebaseAPI');
const dom = require('./dom');

/* ----------------------- Blog Section --------------------- */
// GET
// Get blog data from database and display on the page
// Check to see if firebase has been initiallized,
// if not, initiallize it before call the get function
const getBlogsEvent = () => {
  firebaseAPI.getBlogsFromDB()
    .then((blogData) => {
      dom.printBlogs(blogData,4);
    })
    .catch((err) => {
      console.error(err);
    });
};

const printBlogDetailToModal = () => {
  $(document).on('click','.blog-read-detail', (e) => {
    $('.modal-title').html($(e.target).closest('.blog-card-wrapper').find('.blog-title p').html());
    $('.modal-body').html($(e.target).closest('.blog-card-wrapper').find('.blog-detail').html());
  });
};

// GET
// Get project data from database and display on the page
// Check to see if firebase has been initiallized,
// if not, initiallize it before call the get function
const getProjectsEvent = () => {
  firebaseAPI.getProjectsFromDB()
    .then((projectData) => {
      dom.printProjectPaginationController(projectData);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getAllDataOnPageLoad = () => {
  if (!firebase.apps.length) {
    firebaseAPI.getFirebseConfig()
      .then(() => {
        getBlogsEvent();
        getProjectsEvent();
      })
      .catch((err) => {
        console.error('Firebase has not been initiallized:',err);
      });
  };
};

const moveToSection = () => {
  $(document).on('click', (e) => {
    let offset = '';
    if (e.target.id === 'project-page-link') {
      offset = $('#section-a').offset();
      const scrollto = offset.top - 49; // minus fixed header height
      $('html, body').animate({ scrollTop: scrollto, }, 700);
    } else if (e.target.id === 'blog-page-link') {
      offset = $('#section-b').offset();
      const scrollto = offset.top - 49; // minus fixed header height
      $('html, body').animate({ scrollTop: scrollto, }, 700);
    } else if (e.target.id === 'skill-page-link') {
      offset = $('#section-c').offset();
      const scrollto = offset.top - 49; // minus fixed header height
      $('html, body').animate({ scrollTop: scrollto, }, 700);
    } else if (e.target.id === 'contact-page-link') {
      offset = $('#main-footer').offset();
      const scrollto = offset.top - 49; // minus fixed header height
      $('html, body').animate({ scrollTop: scrollto, }, 700);
    } else if (e.target.id === 'home-page-link') {
      offset = $('body').offset();
      const scrollto = offset.top - 49; // minus fixed header height
      $('html, body').animate({ scrollTop: scrollto, }, 700);
    } else if (e.target.classList.contains('pagination-page-link')) {
      offset = $('#section-a').offset();
      const scrollto = offset.top - 49; // minus fixed header height
      $('html, body').animate({ scrollTop: scrollto, }, 700);
    };
  });
};

const getDifferentBlogs = () => {
  $(document).on('click','#more-blog-btn', () => {
    getBlogsEvent();
  });
};

const blogOnTapEvent = () => {
  $(document).on('click','.blog-title', (e) => {
    $('.modal-title').html($(e.target).closest('.blog-card-wrapper').find('.blog-title p').html());
    $('.modal-body').html($(e.target).closest('.blog-card-wrapper').find('.blog-detail').html());
  });
};

const projectPaginationEvent = () => {
  $(document).on('click','.page-item', (e) => {
    const page = $(e.target).text() * 1;
    firebaseAPI.getProjectsFromDB()
      .then((projectData) => {
        dom.printProjects(projectData,page);
        moveToSection();
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

module.exports = {
  getAllDataOnPageLoad,
  printBlogDetailToModal,
  moveToSection,
  getDifferentBlogs,
  blogOnTapEvent,
  projectPaginationEvent,
};
