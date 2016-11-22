//no ctor params, no config


'use strict';


const restify = require('restify');

class Server {
    constructor() {
        this.started = false;
        this.port = process.env.PORT || 8080;
        this.server = restify.createServer({
            name: "node API"
        });
    }

    start() {
        if (!this.started) {
            this.server.use(restify.CORS());
            this.server.use(restify.bodyParser());

            this.server.listen(this.port);
            this.started = true;
        }
    }
    shutdown() {
        if (this.started) {
            this.server.close();
            this.started = flase;
        }
    }
}

module.exports = new Server();