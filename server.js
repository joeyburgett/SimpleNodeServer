/**
 * Created by Joey Burgett on 3/23/2015.
 */
var express = require('express'),
    controllers = require('./controllers'),
    restify = require('restify'),
    app = express();

var server = restify.createServer({
    name: 'REST API'
});

controllers.init(server);

server.listen(3000, function() {
    console.log('[%s] Server listening.', server.name);
});