const events = require('./events');

const initializeApp = () => {
  events.getAllDataOnPageLoad();
  events.printBlogDetailToModal();
  events.moveToSection();
  events.getDifferentBlogs();
  events.blogOnTapEvent();
  events.projectPaginationEvent();
  events.selectCurrentPageEvent();
};

initializeApp();
