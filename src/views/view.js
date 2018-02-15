(function(exports){
  function addNoteLink() {
    var link = document.createElement('a');
    link.href = "#" + (noteList().notes().length - 1);
    link.innerHTML = noteList().latestNote().abbreviation;
    link.id = noteList().latestNote().abbreviation;
    document.getElementById('notelist').appendChild(link);
  }

  exports.addNoteLink = addNoteLink
})(this);
