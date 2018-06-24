const events = require('./events');

const initializeApp = () => {
  events.getBlogsEvent();
  events.printBlogDetailToModal();
};

initializeApp();
