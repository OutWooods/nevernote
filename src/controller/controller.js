(function(exports){

var NoteListInstance;

function noteList(){
  return NoteListInstance
}

function submitButtonControl(){
  document.getElementById("saveNote").addEventListener("click", function(clickEvent){
    clickEvent.preventDefault();
    noteList().addNewNote(document.getElementById("noteContent").value);
    displayNote()
    addNoteLink()
  })
}

function onLoad() {
  NoteListInstance = new NoteList(Note)
  submitButtonControl();
  // currently including running tests here
  runFeatureTests();
}

exports.onLoad = onLoad;
exports.noteList = noteList;

})(this)
