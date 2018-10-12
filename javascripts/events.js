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

const flagCurrentPageEvent = (e) => {
  $('.pagination-page-link').removeClass('default-page-selected');
  $('.pagination-page-link').removeClass('page-selected');
  $(e.target).addClass('page-selected');
};

const projectPaginationEvent = () => {
  $(document).on('click','.project-page', (e) => {
    const page = $(e.target).text() * 1;
    firebaseAPI.getProjectsFromDB()
      .then((projectData) => {
        moveToSection();
        flagCurrentPageEvent(e);
        dom.printProjects(projectData,page);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

const prevPageEvent = () => {
  $(document).on('click','.prev-page', () => {
    const currentPage = $('.page-selected').text() * 1;
    const prevPage = currentPage - 1;

    if (currentPage !== 1) {
      $('.pagination-page-link').removeClass('page-selected');
      $(`#page-${prevPage}`).addClass('page-selected');

      firebaseAPI.getProjectsFromDB()
        .then((projectData) => {
          dom.printProjects(projectData,prevPage);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
};
// if $('.page-selected')[0] is undefine
// that means the page indeicator is on page 1
const nextPageEvent = () => {
  $(document).on('click','.next-page', () => {
    const currentPage = $('.page-selected')[0] === undefined ? 1 : $('.page-selected').text() * 1;
    const nextPage = currentPage + 1;

    if (currentPage !== 2) {
      $('.pagination-page-link').removeClass('default-page-selected');
      $('.pagination-page-link').removeClass('page-selected');
      $(`#page-${nextPage}`).addClass('page-selected');

      firebaseAPI.getProjectsFromDB()
        .then((projectData) => {
          dom.printProjects(projectData,2);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
};

module.exports = {
  getAllDataOnPageLoad,
  printBlogDetailToModal,
  moveToSection,
  getDifferentBlogs,
  blogOnTapEvent,
  projectPaginationEvent,
  prevPageEvent,
  nextPageEvent,
};
