
const writeToDom = (string,id)=>{
    document.getElementById(id).innerHTML = string;
}

const createBlogPosts = (data)=>{
    let domString = '';
    for(let i = 0; i < data.blogs.length; i++){
        domString += `<div>`;
        domString += `<h2 class="float-left">${data.blogs[i].title}</h2>`;
        domString += `<p class="float-right">${data.blogs[i].date}</p>`;
        domString += `<p class="clear-float">${data.blogs[i].post}</p>`;
        domString += `</div>`;
      }
      writeToDom(domString,'blog-container');    
}

function executeOnSuccess(){
    const data = JSON.parse(this.responseText);
    createBlogPosts(data);
}

function executeOnFail(){
    console.log('XHR fails');
}

const runApplication = () => {
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener('load',executeOnSuccess);
    xhrRequest.addEventListener("error", executeOnFail);
    xhrRequest.open("GET","./db/blogs.json");
    xhrRequest.send();
}

runApplication();
