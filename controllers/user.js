/**
 * Created by Joey Burgett on 3/23/2015.
 */
(function (user) {

    var service = require('../service.js');

    function getAllUsers(request, response, next) {
        var users = service.getAllUsers();

        response.contentType='json';
        response.send(users);

        next();
    }

    function getUserByEmail(request, response, next) {
        var email =  request.params.email;
        var user = service.getUserByEmail(email);

        if (user) {
            response.contentType = 'json';
            response.send(user);
        } else {
            response.status(404);
            response.end();
        }
        next();
    }

    user.init  = function (app) {

        app.get('/users/:email', getUserByEmail);
        app.head('/users/:email', getUserByEmail);
        app.get('/users', getAllUsers);
        app.head('/users', getAllUsers);

    };

})(module.exports);