// Counter button coding
var button = document.getElementById('counter');
var counter=0;
button.onclick = function()

{   //Creating a request
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        
        {  if(request.status === 200)
        {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
       }
            }
    };
    
    
    // Making a request
    request.open('GET','http://h3lli3ring3r.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
};


//Submitted names

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit =    document.getElementById('submit');
submit.onclick = function(){
    var names = ['name1','name2','name3','name4'];
    var list ='';
    for(var i=0; i< names.length;i++)
    {
        list += '<li>' + names[i] +'</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};