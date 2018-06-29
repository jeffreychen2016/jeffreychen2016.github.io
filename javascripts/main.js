const events = require('./events');

const initializeApp = () => {
  events.getAllDataOnPageLoad();
  events.printBlogDetailToModal();
};

initializeApp();
