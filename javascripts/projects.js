const writeToDom = (string,id)=>{
    document.getElementById(id).innerHTML = string;
}

const createProjectCards = (data)=>{
    let domString = '';
    for(let i = 0; i < data.projects.length; i++){
        domString += `<div>`;
        domString += `<h2>${data.projects[i].title}</h2>`;
        domString += `<img src ="${data.projects[i].imageUrl}">`;
        domString += `<p>${data.projects[i].description}</p>`;
        domString += `<p>${data.projects[i].githubUrl}</p>`;
        domString += `</div>`;
      }
    writeToDom(domString,'project-container');    
}

function executeOnSuccess(){
    const data = JSON.parse(this.responseText);
    createProjectCards(data);
}

function executeOnFail(){
    console.log('XHR fails');
}

const runApplication = () => {
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener('load',executeOnSuccess);
    xhrRequest.addEventListener("error", executeOnFail);
    xhrRequest.open("GET","./db/projects.json");
    xhrRequest.send();
}

runApplication();
