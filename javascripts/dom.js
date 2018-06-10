const printBlogs = (blogData) => {
  let domString = '';
  for (let i = 0; i < blogData.length; i++) {
    domString += `<div>`;
    domString += `<h2 class="float-left">${blogData[i].title}</h2>`;
    domString += `<p class="float-right">${blogData[i].date}</p>`;
    domString += `<p class="clear-float">${blogData[i].post}</p>`;
    domString += `</div>`;
  }
  $('#blog-container').append(domString);
};

module.exports = {
  printBlogs,
};
