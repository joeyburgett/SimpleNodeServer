/**
 * Created by Joey Burgett on 3/23/2015.
 */
var user = require('./data/user.js'),
    company = require('./data/company.js');

exports.getAllCompanies = function() {
    return company.getAllCompanies();
};

exports.getCompanyByName = function(name) {
    var companies = company.getCompanyByName(name);
    return companies[0];
};

exports.getAllUsers = function() {
    return user.getAllUsers();
};

exports.getUserByEmail = function(email) {
    var users = user.getUserByEmail(email);
    return users[0];
};