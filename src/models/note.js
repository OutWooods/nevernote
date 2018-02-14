(function(exports){

  function Note(text) {
    this.text = text;
    this.abbreviation = text.substring(0,19);
  };

  Note.createNote = function(text){
    var note = new Note(text)
    return note
  }

  exports.Note = Note;
})(this);
