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

function showSelectedNote() {
  console.log("hamster")
  console.log(window)
  window.addEventListener("hashchange", findNote);
}

function findNote (){
  console.log("good")
  displayNote(findIndex(window.location))
}

function displayNote (index){
  document.getElementById('notebody').innerHTML = noteList().notes()[index].text
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
