/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   NodeTest.Server.Engine
    * Version       :   @package.js.version
    * Description   :   NodeTest Server Engine
    * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
    * Licence       :   MIT
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Package       :   No Package / Web Application
    * Repository    :   https://bitbucket.org/azmisahin/node1
    * Homepage      :   https://azmisahin.bitbucket.io
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
'use strict';

/**
 * Engine
 * 
 * @public
 */
var Engine = {
    public: "www",
    lib: "lib",
    themes: "themes",
    areas: {
        server: {
            name: "server",
            theme: "default",
            content: "content",
            views: "views",
            url: function () {
                return Engine.public + "/" + Engine.themes + "/" + Engine.areas.server.name + "/" + Engine.areas.server.theme + "/" + Engine.areas.server.views + "/";
            }
        }, client: {
            name: "client",
            theme: "default",
            content: "content",
            views: "views",
            url: function () {
                return Engine.public + "/" + Engine.themes + "/" + Engine.areas.client.name + "/" + Engine.areas.client.theme + "/" + Engine.areas.client.views + "/";
            }
        }
    }
};

/**
 * Engine Module Model
 * Module Exports
 */
module.exports = Engine;