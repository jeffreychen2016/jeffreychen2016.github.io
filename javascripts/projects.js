var projects = [
    {
        id: "project1", 
        title: "Cool Project 1", 
        imageUrl: "./imgs/project.jpg", 
        description: "This is the best project",
        githubUrl: "https://github.com/jeffreychen2016/jeffreychen2016.github.io"
    },
    {
        id: "project2", 
        title: "Cool Project 2", 
        imageUrl: "./imgs/project.jpg", 
        description: "This is the best project",
        githubUrl: "https://github.com/jeffreychen2016/jeffreychen2016.github.io"
    },
    {
        id: "project3", 
        title: "Cool Project 3", 
        imageUrl: "./imgs/project.jpg", 
        description: "This is the best project",
        githubUrl: "https://github.com/jeffreychen2016/jeffreychen2016.github.io"
    },
    {
        id: "project4", 
        title: "Cool Project 4", 
        imageUrl: "./imgs/project.jpg", 
        description: "This is the best project",
        githubUrl: "https://github.com/jeffreychen2016/jeffreychen2016.github.io"
    },
    {
        id: "project5", 
        title: "Cool Project 5", 
        imageUrl: "./imgs/project.jpg", 
        description: "This is the best project",
        githubUrl: "https://github.com/jeffreychen2016/jeffreychen2016.github.io"
    },
    {
        id: "project6", 
        title: "Cool Project 6", 
        imageUrl: "./imgs/project.jpg", 
        description: "This is the best project",
        githubUrl: "https://github.com/jeffreychen2016/jeffreychen2016.github.io"
    }
  ];

  function writeToDom(string,id){
      document.getElementById(id).innerHTML = string;
  }

  function createProjectCards(){
      var domString = '';
      for(var i = 0; i < projects.length; i++){
        domString += '<div>';
        domString += '<h2>' + projects[i].title + '</h2>';
        domString += '<img src ="' + projects[i].imageUrl + '">';
        domString += '<p>' + projects[i].description + '</p>';
        domString += '<p>' + projects[i].githubUrl + '</p>';
        domString += '</div>'
      }
      writeToDom(domString,'project-container');    
  }

  createProjectCards();