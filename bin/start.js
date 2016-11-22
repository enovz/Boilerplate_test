
'use strict';

const app = require('../lib/app');
app.start();
console.info("Server listening on port: " + app.app_server.port);