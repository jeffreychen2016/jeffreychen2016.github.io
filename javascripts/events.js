const firebaseAPI = require('./firebaseAPI');
const dom = require('./dom');

/* ----------------------- Blog Section --------------------- */
// GET
// Get blog data from database and display on the page
// Check to see if firebase has been initiallized,
// if not, initiallize it before call the get function
const getBlogsEvent = () => {
  if (!firebase.apps.length) {
    firebaseAPI.getFirebseConfig()
      .then(() => {
        firebaseAPI.getBlogsFromDB()
          .then((blogData) => {
            dom.printBlogs(blogData,4);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    firebaseAPI.getBlogsFromDB()
      .then((blogData) => {
        dom.printBlogs(blogData,4);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log('No firebase app has been initialized!');
  };
};

const displayBlogDetailEvent = () => {
  $(document).on('click', '.blog-read-detail', (e) => {
    $(e.target).closest('.blog-card-wrapper').find('.blog-detail').removeClass('hide').hide().fadeIn(600);
  });
};

module.exports = {
  getBlogsEvent,
  displayBlogDetailEvent,
};
