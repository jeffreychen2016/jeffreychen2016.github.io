let firebaseConfig = {};

const getFirebseConfig = () => {
  return new Promise((resolve,reject) => {
    $.ajax('../db/apiKeys.json')
      .done((config) => {
        // initialize firebase
        firebase.initializeApp(config.apiKeys.firebaseDB);
        firebaseConfig = config;
        resolve(config);
      })
      .fail((err) => {
        console.error('Failed to retrieve Firbase config:',err);
      });
  });
};

/* ---------------- Blog Section ------------------ */
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

/* ---------------- Project Section ------------------ */
// GET
// retrieve blog data from Firebase database
const getProjectsFromDB = () => {
  return new Promise((resolve,reject) => {
    const projectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/projects/projects.json`,
    })
      .done((projectData) => {
        if (projectData !== null) {
          Object.keys(projectData).forEach((fbKey) => {
            projectData[fbKey].id = fbKey;
            projectsArray.push(projectData[fbKey]);
          });
        };
        resolve(projectsArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  getFirebseConfig,
  getBlogsFromDB,
  getProjectsFromDB,
};
