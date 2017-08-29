/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   node1
    * Version       :   @package.js.version
    * Description   :   Node
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
 * Node Test
 * 
 * @public
 */
var NodeTest = function() {
};

/**
  * NodeTest.Package
  * Package Information
  * 
  * @public
  */
NodeTest.prototype.Package = require('./package.json');

/**
  * NodeTest.Logger
  * Logger
  * 
  * @public
  */
  NodeTest.prototype.Logger = require('./lib/logger');

/**
  * NodeTest.Server
  * Server
  * 
  * @public
  */
  NodeTest.prototype.Server = require('./app/server');

  /**
  * NodeTest.Client
  * Server
  * 
  * @public
  */
  NodeTest.prototype.Client = require('./app/client');

/**
 * Node Domain Driven Design
 * Module Exports
 */
module.exports = NodeTest;