(function(exports){

  function NoteList(noteObject){
    this.store = []
    this.noteObject = noteObject;
  }

  NoteList.prototype.addNewNote =  function(content){
    let newNote = this.createNote(content);
    this.store.push(newNote);
  }

  NoteList.prototype.createNote = function(content) {
     return this.noteObject.createNote(content);
  }

  NoteList.prototype.notes = function() {
    return this.store.slice()
  }

  exports.NoteList = NoteList;
})(this);
