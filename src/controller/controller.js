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
  })
}

function onLoad() {
  NoteListInstance = new NoteList(Note)
  submitButtonControl();
}

exports.onLoad = onLoad;
exports.noteList = noteList;

})(this)
