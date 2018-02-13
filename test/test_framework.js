function addElement (message) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(message);
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}


var assert = {
  isTrue: function(value, message) {
    if(!value) {
      addElement(`Failure: ${message}`);}
    else {
      addElement(`Success: ${message}`);
   }
  }
}
