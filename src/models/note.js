(function(exports){
  function Note(text) {
    this.text = text;
  };
  Note.createNote = function(text){
    var note = new Note(text)
    return note
  }
  exports.Note = Note;
})(this);
