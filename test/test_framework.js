function addElement (message) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(message);
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById('div1');
  currentDiv.appendChild(newDiv);
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

function fillInForm(id, string) {
    document.getElementById(id).value = string
  }

  function clickButton(id) {
    document.getElementById(id).click();
  }

  function hasContent(id, string) {
    return document.getElementById(id).innerHTML.includes(string);
  }

  function doesntHaveContent(id, string) {
   return !(document.getElementById(id).innerHTML.includes(string));
  }
