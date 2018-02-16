function addSuccessDiv (message) {
  newDiv = createDiv("success", message);
  var currentDiv = document.getElementById('div1');
  currentDiv.appendChild(newDiv);
}

function addErrorStack(err) {
  messageDiv = createDiv("fail", 'Failure: ' + err.message);
  stackDiv = createDiv("stack", err.stack);
  locationDiv = createDiv("location", err.fileName + ' at ' + err.lineNumber + ':' + err.columnNumber );

  failureDiv = createDiv("failure", "");
  failureDiv.appendChild(messageDiv);
  failureDiv.appendChild(stackDiv);
  failureDiv.appendChild(locationDiv);

  var currentDiv = document.getElementById('div1');
  currentDiv.appendChild(failureDiv);
}

function createDiv(id, text) {
  var Div = document.createElement("div");
  Div.id = id;
  var message = document.createTextNode(text);
  Div.appendChild(message);
  return Div;
}

var it = function(message, tester) {
       try{
         tester()
       }
       catch(err) {
         console.error(err)
          return addErrorStack(err)
       }
      return  addSuccessDiv(message)
}


var assert = {
  isTrue: (value, message) => {
    if(!value) { throw `Failure: It should be true but is false...`;  }
},


  equals: (actual, expected) => {
    if(actual != expected) {
     throw `Failure!!!! Actual: ${actual}, expected: ${expected}`
    }
  }
}



//feature tests
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
