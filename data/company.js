/**
 * Created by Joey Burgett on 3/23/2015.
 */
var loki = require('lokijs'),
    db = new loki('companies');

var companies = db.getCollection('companies');

if (!companies) {
    var companySeed = require('./companies.json');

    companies = db.addCollection('companies', 'Company', ['name']);
    companies.insert(companySeed);
}

exports.getCompanies = function() {
    return companies.data;
};

exports.getCompanyByName = function(name) {
    return companies.find({
        'name': name
    });
};