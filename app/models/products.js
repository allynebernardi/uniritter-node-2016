'use strict';

var Types = require('joi');

module.exports = function (server) {
    const 
        harvesterPlugin = server.plugins['hapi-harvester'],
        schema = {
            type: 'products',
            attributes: {
                name: Types.string().required(),
                price: Types.number().required(),
                model: Types.string().forbidden(),
                brand: Types.string().forbidden(),
                             
            }
        }

    harvesterPlugin.routes.all(schema).forEach(function (route) {
        server.route(route)
    })
}
