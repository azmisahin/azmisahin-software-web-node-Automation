/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   node1 Test
    * Version       :   @package.js.version
    * Description   :   Node Test
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
 */

describe('Node Global Test', require('./global'));
describe('Library Logger Test', require('./lib.logger'));
describe('Node App Test', require('./app'));
describe('Server Engine Test', require('./server.engine'));