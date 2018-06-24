const events = require('./events');

const initializeApp = () => {
  events.getBlogs();
};

initializeApp();
