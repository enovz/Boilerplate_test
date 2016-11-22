/* set config for enviroment, server port, name, log, db url, db username, db password, db
const Settings = require('settings'),
     config = new Settings(require('../config')),*/

'use strict';

const Registrar = require('./server/Registrar');

class App {
    constructor() {
        this.app_server = require('./server/server');
        this.app_api = require('./api/api');
    };
    start() {
        this.app_server.start(); 
        let app_resources = this.app_api.gatherResources();
        let app_registrar = new Registrar(this.app_server.server);
        app_registrar.mount(app_resources);
    }
    stop() {
        this.server.shutdown();
    }
}

module.exports = new App();