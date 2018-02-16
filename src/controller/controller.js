(function(exports){

var NoteListInstance;

function noteList(){
  return NoteListInstance
}

function submitButtonControl(){
  document.getElementById("saveNote").addEventListener("click", function(clickEvent){
    clickEvent.preventDefault();
    noteList().addNewNote(document.getElementById("noteContent").value);
    addNoteLink()
  })
}

function showSelectedNote() {
  window.addEventListener("hashchange", findNote);
}

function findNote(){
  displayNote(findIndex(window.location))
}

function displayNote(index){
  var textNote = noteList().notes()[index]
  document.getElementById('notebody').innerHTML = textNote.text
}

function findIndex(location){
  return location.hash.split("#")[1];
}

function onLoad() {
  NoteListInstance = new NoteList(Note)
  submitButtonControl();
  showSelectedNote();
  // currently including running tests here
  runTests();
}



exports.onLoad = onLoad;
exports.noteList = noteList;

})(this)
