var blogs = [
    {
      id: "blog1", 
      title: "HTML, CSS, Git, Github", 
      date: "02/27/18", 
      post: "For the first few classes, I was introduced to HTML,CSS,Git and Github. There is nothing special or new when talked about HTML and CSS in terms of what tags to use or how to stype the HTML page. However, what is new and really useful to me is the way Zoe did the first Zen-Garden project. She spent decent amount of time went throught the HTML layout then start doing the CSS. The work and logic flow is really clear this way. Moreover, I was also introduced to a new technology that is really powerful and useful -- Git and Github. They are version control technology. However, it is kind of difficult to understand at the first time since there is no user interface. It is very important to understand the logic behind each command"
    },
    {
        id: "blog2", 
        title: "JS", 
        date: "03/06/18", 
        post: "This week, I was introduced to JavaScript. This is where we start making the website interactive. It involves concept of objects which I did not fully understand when I did my NSS preworks. After Zoe explained the basic concept and I worked through some challenge questions. It starts making more sense to me now."
    },
    {
        id: "blog3", 
        title: "Advanced JS", 
        date: "03/13/18", 
        post: "This week, I was introduced more advanced javaScript techniques which involves looping through arrays,objects and creating custom functions. Function makes my codes more orgnized and clean, and I do not have to worry about the scope of variables. Before I know how to use the function, I had variable decleared all over the places cross the js file. Sometimes I forgot what I already declared and re-declare the varible which gave me a lof troubles. With function, whatever variable I declared only exist in the scope of current function. When I jump into other functions, I do not have to worry about what variable name I should use in order to prevent re-declaring variable"
    }
  ];

function writeToDom(string,id){
    document.getElementById(id).innerHTML = string;
}

function createBlogPosts(){
    var domString = '';
    for(var i = 0; i < blogs.length; i++){
        domString += '<div>';
        domString += '<h2 class="float-left">' + blogs[i].title + '</h2>';
        domString += '<p class="float-right">' + blogs[i].date + '</p>';
        domString += '<p class="clear-float">' + blogs[i].post + '</p>';
        domString += '</div>'
      }
      writeToDom(domString,'blog-container');    
}

createBlogPosts();
