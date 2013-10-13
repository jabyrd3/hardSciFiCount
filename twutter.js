var Twit = require('twit');

var T = require('./config1.js');
var ping = new Twit(T);

ping.get('users/lookup', { screen_name: 'hardscifimovies' },  function (err, reply) {
//    return reply;      
    console.log('@hardSciFiMovies has ' + reply[0].followers_count + ' followers.');
})
