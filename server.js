var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles ={
    'article-1' : { title:'Article 1',
    heading:"Article:1",
    date:"Nov. 11 2016",
    content:`
     <p>
              This is the content for the article 1.
          </p>
    
     <p>
              This is the content for the article 1.
          </p>
    <p>
              This is the content for the article 1.
          </p> 
    `},
    'article-2': { title:'Article 2',
    heading:"Article:2",
    date:"Nov. 15 2016",
    content:`
     <p>
              This is the content for the article 2.
          </p>
     <p>
              This is the content for the article 2.
          </p>
    <p>
              This is the content for the article 2.
          </p> 
    `},
    'article-3': {
         title:'Article 3',
    heading:"Article:3",
    date:"Nov. 19 2016",
    content:`
     <p>
              This is the content for the article 3.
          </p>
    <p>
              This is the content for the article 3.
          </p>
    <p>
              This is the content for the article 3.
          </p> 
    `
    }
};

function  createTemplate(data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTemplate=
`<html>
 <head>
  <title>
    ${title}
    </Title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class ="container">
            
        <div>
        <a href = "/">Home</a>
          </div>
          <h3>
          ${heading}
          </h3> 
          <div>
         ${date}
        </div>
        <div>
       ${content}
        </div>
      
    </body>
</html>
`
return htmlTemplate;

}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename', function (req, res){
    //article name = article-1
    
    var articlename = req.params.articlename;
  res.send(createTemplate(articles[articlename]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
