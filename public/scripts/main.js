TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './images/logo.png',
      text: 'GitLab',
      callback: function (t) {
        t.get('organization', 'private', 'api')
          .then(function(r) {
            console.log(r);
          });
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