const moment = require('../lib/node_modules/moment');

// dynamically generate rondom blogs from database
const generateRondomNumbers = (blogArrayLength,numbersNeeded) => {
  const arr = [];
  while (arr.length < numbersNeeded) {
    const randomnumber = Math.floor(Math.random() * blogArrayLength);
    if (arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
  };
  return arr;
};

const printBlogs = (blogData,blogsNeeded) => {
  const randomNumber = generateRondomNumbers(blogData.length,blogsNeeded);
  console.log(blogData);
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

    // domString += `<p class="float-right">${blogData[i].date}</p>`;
  }
  $('#blogs-wrappper').html(domString);
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
