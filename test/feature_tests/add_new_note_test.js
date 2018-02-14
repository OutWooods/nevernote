


function seeAbbreviation() {
  // setTimeout(function() {
  fillInForm('noteContent', 'This is the best note taking app ever');

  clickButton('saveNote');
  assert.isTrue(hasContent('notelist', 'This is the best not'), 'should have content: This is the best not');
  assert.isTrue(doesntHaveContent('notelist', 'e taking app ever'), 'does not have content: e taking app ever' );
// }, 5000)
}


function runFeatureTests() {
    seeAbbreviation();
}
