var server = require("./server_7");
var router = require("./router_3");
var requestHandlers = require("./requestHandlers_4");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
server.start(router.route, handle);