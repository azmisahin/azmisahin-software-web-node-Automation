/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   NodeTest.Logger
    * Version       :   @package.js.version
    * Description   :   NodeTest Logger Library
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
 * Logger
 * 
 * @public
 */
var Logger = function () {

    /**
     * Logger.debug
     * @param string A string message.
     * 
     * @public
     */
    var debug = function (string) {

        // Write Log
        console.log(string);
    }
}

/**
 * Logger Module Model
 * Module Exports
 */
module.exports = Logger;