const auth = require('./auth');

const printBlogs = (blogData) => {
  let domString = '';
  for (let i = 0; i < blogData.length; i++) {
    domString += `<div data-firebase-id='${blogData[i].id}' class='blog-card'>`;
    domString +=  `<h2 class="float-left">${blogData[i].title}</h2>`;
    // domString += `<p class="float-right">${blogData[i].date}</p>`;
    domString +=  `<div class="btn-group btn-group-blog float-right" role="group" aria-label="...">`;
    domString +=  `</div>`;
    domString +=  `<p class="clear-float">${blogData[i].post}</p>`;
    domString += `</div>`;
  }
  $('#blog-container').html(domString);

  // check if admin is log in
  // if log in then display buttons
  auth.checkLoginStatus();
};

const printProjects = (projectData) => {
  let domString = '';
  for (let i = 0; i < projectData.projects.length; i++) {
    domString += `<div>`;
    domString += `<h2>${projectData.projects[i].title}</h2>`;
    domString += `<img src ="${projectData.projects[i].imageUrl}">`;
    domString += `<p>${projectData.projects[i].description}</p>`;
    domString += `<p>${projectData.projects[i].githubUrl}</p>`;
    domString += `</div>`;
  }
  $('#project-container').html(domString);
};

module.exports = {
  printBlogs,
  printProjects,
};
