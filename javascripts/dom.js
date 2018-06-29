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
    domString +=    `<div class="blog-title">`;
    domString +=      `<p>${blogData[randomNumber[i]].title}</p>`;
    domString +=    `</div>`;
    domString +=    `<div class="blog-read-detail" data-toggle="modal" data-target="#blog-modal">`;
    domString +=      `<p>Read Details</p>`;
    domString +=      `<img src="./imgs/if_ic_keyboard_arrow_down_48px_352466.png">`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString +=  `<div class="blog-detail hide">${blogData[randomNumber[i]].post}</div>`;
    domString += `</div>`;
  }
  $('#blogs-wrappper').html(domString);
};

const printProjects = (projectData) => {
  console.log(projectData.length);
  let domString = '';
  for (let i = 0; i < projectData.length; i++) {
    domString += `<div class="project-card col-sm-6 col-md-4">`;
    domString +=  `<div class="thumbnail">`;
    domString +=    `<div class="project-links">`;
    domString +=      `<h3>${projectData[i].title}</h3>`;
    domString +=      `<div class="project-links-group">`;
    domString +=        `<a href="${projectData[i].github}" target="_blank">`;
    domString +=          `<img class='github-icon' src="./imgs/kisspng-computer-icons-github-github-logo-save-icon-format-5ab0fad15af349.5031683815215479853725.png" alt="">`;
    domString +=        `</a>`;
    domString +=        `<a href="${projectData[i].url}" target="_blank">`;
    domString +=          `<img class='browser-icon' src="./imgs/5a3a256a0f8285.78345796151376010606357039.png" alt="">`;
    domString +=        `</a>`;
    domString +=        `<div class='project-description'>`;
    domString +=        `</div>`;
    domString +=      `</div>`;
    domString +=    `</div>`;
    domString +=    `<div class="project-img-wrapper">`;
    domString +=      `<img src="./imgs/Screen Shot 2018-06-24 at 7.59.12 PM.png" alt="">`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString += `</div>`;
  };

  $('#project-row').append(domString);
};

module.exports = {
  printBlogs,
  printProjects,
};
