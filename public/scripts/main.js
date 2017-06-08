var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './images/logo.png',
      text: 'GitLab',
      callback: function (t) {
        Promise.all([
          t.get('organization', 'private', 'api'),
          t.get('organization', 'private', 'token')
        ]).then(function(r) {
          console.log(r);
          let api = r[0];
          let token = r[1];

          axios.get(`${api}/projects`, {
            params: {
              membership: true,
              private_token: token,
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
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