var newNote = {}
var note = { createNote: function() {return newNote} };

function testStoresNewNote(){
  var noteList = new NoteList(note);
  noteList.addNewNote("Hello");
  assert.isTrue(noteList.notes()[0] === newNote, 'Notelist stores a new note');
}

testStoresNewNote();
