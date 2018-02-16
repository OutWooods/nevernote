function addNewNoteTest(){

  it('Test message - deliberate failure', function() {
    assert.isTrue(1 == 2);
  })

  it('Add an abbreviated note', function() {
    fillInForm('noteContent', 'This is the best note taking app ever');
    clickButton('saveNote');
    assert.isTrue(hasContent('notelist', 'This is the best not'), 'should have content: This is the best not');
    assert.isTrue(doesntHaveContent('notelist', 'e taking app ever'), 'does not have content: e taking app ever' );
  })

  it('handles clicking on a link', function() {
    fillInForm('noteContent', "Hello you there, gorgeous person in the world!");
    clickButton('saveNote');
    fillInForm('noteContent', "Goodnight, I really had a good dinner!");
    clickButton('saveNote');
    assert.isTrue(hasContent('notelist', 'Hello you there, gor'));
    assert.isTrue(doesntHaveContent('notelist', 'geous person'));
    assert.isTrue(hasContent('notelist', 'Goodnight, I really '));
    assert.isTrue(doesntHaveContent('notelist', 'had a go'));
  })

}
