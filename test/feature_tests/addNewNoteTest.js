 function testPageHasContent(){
   assert.isTrue(hasContent("note", "Create note"), "has Create note on the page")
 }

 function testUserCanAddNote(){
   fillInForm('noteContent', 'Hello, I am a note');
   clickButton('saveNote');
   assert.isTrue(hasContent('notebody', 'Hello, I am a note'), "Page displays new note created");
 }

 function seeAbbreviation() {
   fillInForm('noteContent', 'This is the best note taking app ever');
   clickButton('saveNote');
   assert.isTrue(hasContent('notelist', 'This is the best not'), 'should have content: This is the best not');
   assert.isTrue(doesntHaveContent('notelist', 'e taking app ever'), 'does not have content: e taking app ever' );
 }
