const moment = require('../lib/node_modules/moment');

// dynamically generate rondom blogs from database
const generateRondomNumbers = (ArrayLength,numbersNeeded) => {
  const arr = [];
  while (arr.length < numbersNeeded) {
    const randomnumber = Math.floor(Math.random() * ArrayLength);
    if (arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
  };
  return arr;
};

const printProjectPaginationController = (projectData) => {
  const numberOfPageNeeded = Math.ceil(projectData.length / 6);
  let domString = '';
  domString += '<nav aria-label="Page navigation example" class="pagination-container">';
  domString +=   '<ul class="pagination">';
  domString +=     '<li class="page-item">';
  domString +=       '<a class="page-link" href="#" aria-label="Previous">';
  domString +=         '<span aria-hidden="true">&laquo;</span>';
  domString +=         '<span class="sr-only">Previous</span>';
  domString +=       '</a>';
  domString +=     '</li>';
  for (let i = 0; i < numberOfPageNeeded; i++) {
    domString +=     `<li class="page-item"><a class="page-link">${i + 1}</a></li>`;
  };
  domString +=       '<li class="page-item">';
  domString +=         '<a class="page-link" href="#" aria-label="Next">';
  domString +=           '<span aria-hidden="true">&raquo;</span>';
  domString +=           '<span class="sr-only">Next</span>';
  domString +=         '</a>';
  domString +=       '</li>';
  domString +=     '</ul>';
  domString +=   '</nav>';

  printProjects(projectData,1);
  $('#section-a').append(domString);
};

const printBlogs = (blogData,blogsNeeded) => {
  const randomNumber = generateRondomNumbers(blogData.length,blogsNeeded);
  let domString = '';
  for (let i = 0; i < blogsNeeded; i++) {
    domString += `<div class="blog-card-wrapper" data-firebase-id='${blogData[randomNumber[i]].id}'>`;
    domString +=  `<div class="blog-card">`;
    domString +=    `<div class="blog-date">`;
    domString +=      `<span class="blog-date-day">${moment(blogData[randomNumber[i]].date).format('DD')}</span>`;
    domString +=      `<span class="blog-date-month">${moment(blogData[randomNumber[i]].date).format('MMM')}</span>`;
    domString +=    `</div>`;
    domString +=    `<div class="blog-title" data-toggle="modal" data-target="#blog-modal">`;
    domString +=      `<p>${blogData[randomNumber[i]].title}</p>`;
    domString +=    `</div>`;
    domString +=    `<div class="blog-read-detail" data-toggle="modal" data-target="#blog-modal">`;
    domString +=      `<p>Read Details</p>`;
    domString +=      `<img src="./imgs/arrow-down.png">`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString +=  `<div class="blog-detail hide">${blogData[randomNumber[i]].post}</div>`;
    domString += `</div>`;
  }

  $('#blogs-wrappper').html(domString);
};

const printProjects = (projectData,page) => {
  $('#project-row').html('');
  let domString = '';
  const firstPorjectIndex = page - 1;
  const reversedProjectData = projectData.reverse();
  for (let i = (firstPorjectIndex * 6); i < (firstPorjectIndex * 6 + 6); i++) {
    if (reversedProjectData[i] === undefined)
    {
      break;
    };

    domString += `<div class="project-card col-sm-6 col-md-4">`;
    domString +=  `<div class="thumbnail">`;
    domString +=    `<div class="project-links">`;
    domString +=      `<h3>${reversedProjectData[i].title}</h3>`;
    domString +=      `<div class="project-links-group">`;
    domString +=        `<a href="${reversedProjectData[i].github}" target="_blank">`;
    domString +=          `<img class='github-icon' src="./imgs/github-project.png" alt="">`;
    domString +=        `</a>`;
    domString +=        `<a href="${reversedProjectData[i].url}" target="_blank">`;
    domString +=          `<img class='browser-icon' src="./imgs/chrome-project.png" alt="">`;
    domString +=        `</a>`;
    domString +=        `<div class='project-description'>`;
    domString +=          `<p>${reversedProjectData[i].description}</p>`;
    domString +=        `</div>`;
    domString +=      `</div>`;
    domString +=    `</div>`;
    domString +=    `<div class="project-img-wrapper">`;
    domString +=      `<img src="${reversedProjectData[i].thumbnail}" alt="">`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString += `</div>`;
  };

  $('#project-row').append(domString);
};

module.exports = {
  printBlogs,
  printProjectPaginationController,
  printProjects,
};
