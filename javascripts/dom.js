const printBlogs = (blogData) => {
  let domString = '';
  for (let i = 0; i < blogData.length; i++) {
    domString += `<div data-firebase-id='${blogData[i].id}' class='blog-card'>`;
    domString +=  `<h2 class="float-left">${blogData[i].title}</h2>`;
    // domString += `<p class="float-right">${blogData[i].date}</p>`;
    domString +=  `<div class="btn-group float-right" role="group" aria-label="...">`;
    domString +=    `<button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal-add"><span class='glyphicon glyphicon-plus'></span>Add</button>`;
    domString +=    `<button type="button" class="btn btn-default btn-edit-blog" data-toggle="modal" data-target="#myModal-edit"><span class='glyphicon glyphicon-pencil'></span>Edit</button>`;
    domString +=    `<button type="button" class="btn btn-default btn-delete-blog"><span class='glyphicon glyphicon-trash'></span>Delete</button>`;
    domString +=  `</div>`;
    domString +=  `<p class="clear-float">${blogData[i].post}</p>`;
    domString += `</div>`;
  }
  $('#blog-container').html(domString);
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
