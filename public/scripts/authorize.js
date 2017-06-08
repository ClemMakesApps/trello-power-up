/* global TrelloPowerUp */

// var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

document.querySelector('.save')
  .addEventListener('click', function() {
    const apiSelector = document.querySelector('.api');
    const tokenSelector = document.querySelector('.token');

    return t.set('organization', 'private', 'api', apiSelector.value)
    .then(function() {
      return t.set('organization', 'private', 'token', tokenSelector.value);
    })
    .then(function(){
      t.closePopup();
    })
  });
