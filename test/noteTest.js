function testNoteTextIsStored() {
   var note = new Note('Note 1');
   assert.isTrue(note.text === 'Note 1', 'Note stored argument passed on instantiation');
}

function testCreateNote(){
  var note = Note.createNote('Note 1')
  assert.isTrue(note instanceof Note, "Returns a new note object")
}

function testAbbreviatedNote(){
  var note = Note.createNote('Note about abbreviated Note - for test purposes');
  assert.isTrue(note.abbreviation === 'Note about abbreviat','Note abbreviated to 20 characters');
}


testNoteTextIsStored();
testCreateNote();
testAbbreviatedNote();
