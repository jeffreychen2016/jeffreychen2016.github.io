const events = require('./events');

const initializeApp = () => {
  events.getAllDataOnPageLoad();
  events.printBlogDetailToModal();
  events.moveToSection();
  events.getDifferentBlogs();
};

initializeApp();
