let firebaseConfig = {};

const getFirebseConfig = () => {
  return new Promise((resolve,reject) => {
    $.ajax('../db/apiKeys.json')
      .done((config) => {
        // initialize firebase
        firebase.initializeApp(config.firebaseDB);
        firebaseConfig = config;
        resolve(config);
      })
      .fail((err) => {
        console.error('Failed to retrieve Firbase config:',err);
      });
  });
};

// GET
// retrieve blog data from Firebase database
const getBlogsFromDB = () => {
  return new Promise((resolve,reject) => {
    const blogsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/blogs.json`,
    })
      .done((blogData) => {
        if (blogData !== null) {
          Object.keys(blogData).forEach((fbKey) => {
            blogData[fbKey].id = fbKey;
            blogsArray.push(blogData[fbKey]);
          });
        };
        resolve(blogsArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

// Post blog to database
const postBlogToDB = (blogToPost) => {
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/blogs.json`,
      data: JSON.stringify(blogToPost),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  getFirebseConfig,
  getBlogsFromDB,
  postBlogToDB,
};
