function addElement (message) {
  newDiv = createDiv("success", message);
  var currentDiv = document.getElementById('div1');
  currentDiv.appendChild(newDiv);
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



var it = function(message, tester) {
       var result = tester();
       var id = (result.includes('success')) ? 'success' : 'fail'
       addElement(`${message}: ${result}`, id);
}

// var throw = function(){
//      try{
//         throw new Error(message);
//       }
//       catch(err) {
//         addPrettifiedError(err);
//       }
//     }
// }

var assert = {
  isTrue: (value, message) => {
    if(!value) {
      return `Failure: It should be true but is false...`;
    } else {
      return `Success! It should be true, and it is true...`;
   }
},

  equals: (actual, expected) => {
    if(actual === expected) {
      return `Success! Actual: ${actual}, expected: ${expected}`
    }
    else {
     return `Failure!!!! Actual: ${actual}, expected: ${expected}`
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
