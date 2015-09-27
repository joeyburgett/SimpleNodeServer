/**
 * Created by Joey Burgett on 3/23/2015.
 */
(function (company) {

    var service = require('../service.js');

    function getAllCompanies(request, response, next) {
        var data = service.getAllCompanies();

        response.contentType='json';
        response.send(data);

        next();
    }

    function getCompanyByName(request, response, next) {
        var name =  request.params.name;

        var data = service.getUserByEmail(name);

        if (data) {
            response.contentType = 'json';
            response.send(data);
        } else {
            response.status(404);
        }

        next();
    }

    company.init  = function (app) {

        app.get('/companies/:name', getCompanyByName);
        app.head('/companies/:name', getCompanyByName);
        app.get('/companies', getAllCompanies);
        app.head('/companies', getAllCompanies);

    };

})(module.exports);