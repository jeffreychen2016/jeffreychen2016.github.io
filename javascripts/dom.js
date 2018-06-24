const printBlogs = (blogData) => {
  console.log(blogData);
  let domString = '';
  for (let i = 0; i < blogData.length; i++) {
    domString += `<div class="blog-card-wrapper" data-firebase-id='${blogData[i].id}'>`;
    domString +=  `<div class="blog-card">`;
    domString +=    `<div class="blog-date">`;
    domString +=      `<span class="blog-date-day">23</span>`;
    domString +=      `<span class="blog-date-month">April</span>`;
    domString +=    `</div>`;
    domString +=    `<div class="blog-title">`;
    domString +=      `<p>${blogData[i].title}</p>`;
    domString +=    `</div>`;
    domString +=    `<div class="blog-read-detail">`;
    domString +=      `<p>Read Details</p>`;
    domString +=      `<img src="./imgs/if_ic_keyboard_arrow_down_48px_352466.png">`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString +=  `<div class="blog-detail">${blogData[i].post}</div>`;
    domString += `</div>`;

    // domString += `<p class="float-right">${blogData[i].date}</p>`;
  }
  $('.blogs-wrappper').html(domString);
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
