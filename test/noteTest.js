// expect note.text = thing
var assert = {
  isTrue: function(value, message) {
    if(!value) {throw new Error(message + ' is wrong stupid')}
    else console.log(`All good with ${message}`)
  }
}

function testNoteTextIsStored() {
   var note = new Note('Note 1');
   assert.isTrue(note.text === 'Note 1', 'Note stored argument passed on instantiation');
}

testNoteTextIsStored();
//
