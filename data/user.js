/**
 * Created by Joey Burgett on 3/23/2015.
 */
var loki = require('lokijs'),
    db = new loki('users');

var users = db.getCollection('users');

if (!users) {
    var userSeed = require('./users.json');

    users = db.addCollection('users', 'User', ['email'], true);
    users.insert(userSeed);
}

exports.getAllUsers = function () {
    return users.data;
};

exports.getUserByEmail = function (email) {
    return users.find({
        'email': email
    });
};