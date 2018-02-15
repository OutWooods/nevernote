(function(exports){
  function displayNote(){
    var newContent = document.createTextNode(noteList().notes()[0].text)
    document.getElementById("notebody").appendChild(newContent)
  }
  function addNoteLink() {
    var link = document.createElement('a');
    link.innerHTML = noteList().latestNote().abbreviation;
    link.id = noteList().latestNote().abbreviation;
    document.getElementById('notelist').appendChild(link);
  }

  exports.addNoteLink = addNoteLink
  exports.displayNote = displayNote
})(this);
