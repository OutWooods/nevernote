 function testPageHasContent(){
   assert.isTrue(hasContent("note", "Create note"), "has Create note on the page")
 }

 function testUserCanAddNote(){
   fillInForm('noteContent', 'Hello, I am a note');
   clickButton('saveNote');
   assert.isTrue(hasContent('notebody', 'Hello, I am a note'), "Page displays new note created");
 }
