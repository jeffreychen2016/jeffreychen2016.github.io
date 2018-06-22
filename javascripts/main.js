const events = require('./events');
const firebaseAPI = require('./firebaseAPI');

const initializeApp = () => {
  firebaseAPI.getFirebseConfig();
  events.navigatePageEvent();
  events.getBlogsFromDBEvent();
  events.postBlogToDBEvent();
  events.delelteBlogFromDBEvent();
  events.updateBlogInDBEvent();
  events.getBlogIdForUpdateEvent();
  events.getProjectsFromDBEvent();
  events.authenticationEvent();
};

initializeApp();
