(function(exports){

var noteList;

function submitButtonControl(){
  document.getElementById("saveNote").addEventListener("click", function(clickEvent){
    clickEvent.preventDefault();
    noteList.addNewNote(document.getElementById("noteContent").value);
    console.log("Submit Button:");
    console.log(noteList.notes()[0]);
  })
}

function onLoad() {
  noteList = new NoteList(Note)
  submitButtonControl();
}

exports.onLoad = onLoad;
exports.noteList = noteList;

})(this)
