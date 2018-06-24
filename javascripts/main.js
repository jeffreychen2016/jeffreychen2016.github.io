const events = require('./events');

const initializeApp = () => {
  events.getBlogsEvent();
  events.displayBlogDetailEvent();
};

initializeApp();
