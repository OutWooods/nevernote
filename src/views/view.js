(function(exports){
  function displayNote(){
    var newContent = document.createTextNode(noteList().notes()[0].text)
    document.getElementById("notebody").appendChild(newContent)
  }
  function addNoteLink() {
    document.createElement('a');
    var newLink = document.createTextNode(noteList().latestNote().abbreviation)
    document.getElementById('notelist').appendChild(newLink);
  }

  exports.addNoteLink = addNoteLink
  exports.displayNote = displayNote
})(this);
