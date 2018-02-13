function testStoresNewNote(){
  var noteList = new NoteList()
  noteList.addNote("Hello")
  assert.isTrue(noteList.notes.length === 1, 'Notelist length increases by 1')
}

testStoresNewNote()
