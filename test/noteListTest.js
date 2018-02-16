var newNote = {}
var note = { createNote: function() {return newNote} };

function testStoresNewNote(){
  var noteList = new NoteList(note);
  noteList.addNewNote("Hello");
  assert.isTrue(noteList.notes()[0] === newNote, 'Notelist stores a new note');
}


var note2 = { createNote: function(string) {return string} };

function latestNote(){
  var noteList = new NoteList(note2);
  noteList.addNewNote("Hello");
  noteList.addNewNote("Goodbye");
  assert.isTrue(noteList.latestNote() === 'Goodbye', 'Notelist returns latest note');
}

testStoresNewNote();
latestNote();
