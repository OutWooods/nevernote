(function(exports){
  function displayNote(){
    var newContent = document.createTextNode(noteList().notes()[0].text)
    document.getElementById("notebody").appendChild(newContent)
  }
  function addNoteLink() {
    var length = noteList().notes().length - 1
    var newLink = document.createTextNode(noteList().notes()[length].abbreviation)
    document.getElementById('notelist').appendChild(newLink);
  }

  exports.addNoteLink = addNoteLink
  exports.displayNote = displayNote
})(this);
