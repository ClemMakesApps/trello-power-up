TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './images/logo.png',
      text: 'GitLab',
      callback: function (t) {
        console.log(t.get('organization', 'private', 'api'));
      }
    }];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './authorize.html',
      height: 184
    });
  }
});