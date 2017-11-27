// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '189764458031469', // your App ID
        'clientSecret'    : 'b0d639ee7ec4bd8d6559f594089f720e', // your App Secret
        'callbackURL'     : 'http://myfirst-oauth.herokuapp.com:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
