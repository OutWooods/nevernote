(function(exports){
  function displayNote(){ 
    var newContent = document.createTextNode(noteList().notes()[0].text)
    document.getElementById("notebody").appendChild(newContent)
  }
  exports.displayNote = displayNote
})(this);
