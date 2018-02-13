function testNoteTextIsStored() {
   var note = new Note('Note 1');
   assert.isTrue(note.text === 'Note 1', 'Note stored argument passed on instantiation');
}

testNoteTextIsStored();
//
