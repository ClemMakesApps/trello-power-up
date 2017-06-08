TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './images/logo.png',
      text: 'GitLab',
      callback: function(t) {
        return t.popup({
          title: "Card Button Popup",
          url: './card_button.html'
        });
      }
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