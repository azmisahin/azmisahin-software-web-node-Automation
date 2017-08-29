/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   NodeTest.Server.HttpServer
    * Version       :   @package.js.version
    * Description   :   NodeTest Server Http Server
    * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
    * Licence       :   MIT
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Package       :   No Package / Web Application
    * Repository    :   https://bitbucket.org/azmisahin/node1
    * Homepage      :   https://azmisahin.bitbucket.io
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/

// Global Requared
var http = require("http");
var fs = require("fs");

/**
 * Http Server
 * 
 * @public
 */
module.exports = function HttpServer() {

    var events = require('events');
  
    


    /**
     * Http Server Transaction
     * 
     * 
     * */
    function _Transaction(request, response) {
        console.log("tr");
        var eventArgs = { Request: request, Response: response };
        eventEmitter.emit("onTransaction", eventArgs);
    }
    return {
 
        /**
         *  Http Server Listen
         * 
         *   @public
         *  */
        Listen: function Listen() {
            http.createServer(_Transaction).listen(8000);
            console.log("Listen");
        }
    }
};