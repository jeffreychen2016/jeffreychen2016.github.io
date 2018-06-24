const firebaseAPI = require('./firebaseAPI');
const dom = require('./dom');

/* ----------------------- Blog Section --------------------- */
// GET
// Get blog data from database and display on the page
const getBlogs = () => {
  if (!firebase.apps.length) {
    firebaseAPI.getFirebseConfig()
      .then(() => {
        firebaseAPI.getBlogsFromDB()
          .then((blogData) => {
            dom.printBlogs(blogData);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    console.log('No firebase has been initialized!');
  };
};

const getBlogsFromDBEvent = () => {
  $(document).on('click', '.blog-read-detail', (e) => {
    getBlogs();
  });
};

module.exports = {
  getBlogsFromDBEvent,
  getBlogs,
};
