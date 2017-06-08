var callback = function(t) {
  console.log('callbacked');
}

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './images/logo.png',
      text: 'GitLab',
      callback: callback
    }];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  }
});