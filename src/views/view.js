(function(exports){
  function addNoteLink() {
    var br = document.createElement("br");
    var link = document.createElement('a');
    link.href = "#" + (noteList().notes().length - 1);
    link.innerHTML = noteList().latestNote().abbreviation;
    link.id = noteList().latestNote().abbreviation;
    document.getElementById('notelist').appendChild(link).appendChild(br);
  }

  exports.addNoteLink = addNoteLink
})(this);
