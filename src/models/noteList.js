(function(exports){
  function NoteList(note){
    this.notes = []
  }

  NoteList.prototype.addNote =  function(note){
    this.notes.push(note)
  }
  exports.NoteList = NoteList;
})(this);
