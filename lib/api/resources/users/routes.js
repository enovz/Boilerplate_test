/**maby put result data description */


'use strict';

var routes = [
    {
        method: "get",
        url: "",
        action: "getAll"
    },
    {
        method: "post",
        url: "",
        action: "create"
    },
    {
        method: "get",
        url: "/:id",
        action: "getById"
    },
    {
        method: "put",
        url: "/:id",
        action: "update"
    },
    {
        method: "del",
        url: "/:id",
        action: "remove"
    }

];

module.exports = routes;