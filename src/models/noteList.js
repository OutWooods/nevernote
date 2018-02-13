(function(exports){

  function NoteList(noteObject){
    this.store = []
    this.noteObject = noteObject;
  }

  NoteList.prototype.addNewNote =  function(content){
    console.log('1')
    let newNote = this.createNote(content);
    console.log('2')
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
