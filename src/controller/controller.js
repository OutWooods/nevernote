(function(exports){

var newNoteList;

function noteList(){
  return newNoteList
}

function submitButtonControl(){
  document.getElementById("saveNote").addEventListener("click", function(clickEvent){
    clickEvent.preventDefault();
    noteList().addNewNote(document.getElementById("noteContent").value);
    displayNote()
  })
}

function onLoad() {
  newNoteList = new NoteList(Note)
  submitButtonControl();
  runTests();
}



exports.onLoad = onLoad;
exports.noteList = noteList;

})(this)


// document.addEventListener("click", function(clickEvent) {
//           clickEvent.preventDefault();
//      })
