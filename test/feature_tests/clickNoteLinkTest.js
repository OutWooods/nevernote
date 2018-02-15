function visitANote(){
  fillInForm('noteContent', "This is the best note taking site ever!");
  clickButton('saveNote');
  fillInForm('noteContent', "Hello you there, gorgeous person in the world!");
  clickButton('saveNote');
  clickLink('This is the best not');
  assert.isTrue(hasContent('notebody', 'This is the best note taking site ever!'), 'notebody should display whole text')
  assert.isTrue(doesntHaveContent('notebody', 'Hello you there'), 'notebody should not display: Hello you there')
}
