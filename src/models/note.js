(function(exports){

  const ABBREVIATION_LENGTH = 20;

  function Note(text) {
    this.text = text;
    this.abbreviation = text.substring(0, ABBREVIATION_LENGTH);
  };

  Note.createNote = function(text){
    var note = new Note(text)
    return note
  }

  exports.Note = Note;
})(this);
