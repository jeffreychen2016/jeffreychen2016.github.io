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

// DELETE
// Delete blog from database
const delelteBlogFromDB = (blogId) => {
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/blogs/${blogId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((err) => {
        reject(err);
      });
  });
};

// UPDATE
// Edit the existing blog in database
const updateBlogInDB = (blogToUpdate,blogIdToUpdate) => {
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/blogs/${blogIdToUpdate}.json`,
      data: JSON.stringify(blogToUpdate),
    })
      .done(() => {
        resolve();
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
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/projects.json`,
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

// Post project to database
const postProjectToDB = (projectToPost) => {
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/projects.json`,
      data: JSON.stringify(projectToPost),
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
  delelteBlogFromDB,
  updateBlogInDB,
  getProjectsFromDB,
  postProjectToDB,
};
