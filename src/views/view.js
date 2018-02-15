(function(exports){
  function displayNote(){
    var newContent = document.createTextNode(noteList().notes()[0].text)
    document.getElementById("notebody").appendChild(newContent)
  }
  function addNoteLink() {
    var length = noteList().notes().length
    var newLink = document.createTextNode(noteList().notes()[-1].abbreviation)
    document.getElementById('notelist').appendChild(newLink);
  }

  exports.addNoteLink = addNoteLink
  exports.displayNote = displayNote
})(this);
