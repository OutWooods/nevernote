function addElement (message) {
  newDiv = createDiv("success", message);
  var currentDiv = document.getElementById('div1');
  currentDiv.appendChild(newDiv);
}

var assert = {
  isTrue: function(value, message) {
    if(!value) {
      try{
        throw new Error(message);
      }
      catch(err) {
        addPrettifiedError(err);
      }
    }
    else {
      addElement(`Success: ${message}`);
   }
  }
}

function createDiv(id, text) {
  var Div = document.createElement("div");
  Div.id = id;
  var message = document.createTextNode(text);
  Div.appendChild(message);
  return Div;
}

function addPrettifiedError(err) {
  messageDiv = createDiv("errorMessage", 'Failure: ' + err.message);
  stackDiv = createDiv("stack", err.stack);
  locationDiv = createDiv("location", err.fileName + ' at ' + err.lineNumber + ':' + err.columnNumber );

  failureDiv = createDiv("failure", "");
  failureDiv.appendChild(messageDiv);
  failureDiv.appendChild(stackDiv);
  failureDiv.appendChild(locationDiv);

  var currentDiv = document.getElementById('div1');
  currentDiv.appendChild(failureDiv);
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

  function clickLink(id) {
    document.getElementById(id).click();
  }
