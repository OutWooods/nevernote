// function visitANote(){
//   fillInForm('noteContent', "We all love a very nice house");
//   clickButton('saveNote');
//   fillInForm('noteContent', "Hello you there, gorgeous person in the world!");
//   clickButton('saveNote');
//   clickLink('Hello you there, gor');
//   clickLink('We all love a very n');
//   setTimeout(function() {
//     assert.isTrue(hasContent('notebody', 'We all love a very nice house'), 'notebody should display whole text')
//     assert.isTrue(doesntHaveContent('notebody', 'Hello you there'), 'notebody should not display: Hello you there')
//   }, 1000)
//
// }

function visitANote(){
  it('Checks entered note appears correctly in notebody', function() {
    fillInForm('noteContent', "We all love a very nice house");
    clickButton('saveNote');
    fillInForm('noteContent', "Hello you there, gorgeous person in the world!");
    clickButton('saveNote');
    clickLink('Hello you there, gor');
    clickLink('We all love a very n');
    setTimeout(function() {
      assert.hasContent('notebody', 'We all love a very nice house');
      assert.isTrue(doesntHaveContent('notebody', 'Hello you there'), 'notebody should not display: Hello you there')
    }, 1000)
  });
}
