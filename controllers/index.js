/**
 * Created by Joey Burgett on 3/23/2015.
 */
(function (controllers) {

    var user = require("./user.js"),
        company = require('./company.js');

    controllers.init = function (app) {
        user.init(app);
        company.init(app);
    };

})(module.exports);