function addElement (message, id) {
  var newDiv = document.createElement("div");
  newDiv.id = id
  var newContent = document.createTextNode(message);
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById('div1');
  currentDiv.appendChild(newDiv);
}

var it = function(message, tester) {
       var result = tester();
       var id = (result.includes('Success')) ? 'success' : 'fail'
       console.log(result)
       console.log(result.includes('success'))
       addElement(`${message}: ${result}`, id);
}




var assert = {
  isTrue: (value, message) => {
    if(!value) {
      addElement(`Failure: ${message}`);}
    else {
      addElement(`Success: ${message}`);
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
