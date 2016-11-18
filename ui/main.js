// Counter button coding
var button = document.getElementById('counter');
var counter=0;
button.onclick = function()

{ counter = counter + 1;
  var span = deocument.getElementById('count');
  spaninnerHTML = counter.toString();
    
};