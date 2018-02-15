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
  console.log("hamster")
  console.log(window)
  window.addEventListener("hashchange", findNote);
}

function findNote(){
  console.log("good")
  displayNote(findIndex(window.location))
}

function displayNote(index){
  var textNote = noteList().notes()[index]
  document.getElementById('notebody').innerHTML = textNote.text
}

function findIndex(location){
  console.log("hello")
  console.log(location);
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
