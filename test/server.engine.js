// Global Requared
var assert = require("assert");
var chai = require('chai');
var expect = chai.expect;

// Test Object
var ViewEngine = require("../app/server/engine.js");

'use strict';

/**
 * Test Iteration
 * 
 */
module.exports = function () {
    it("Server View Engine is Create", function () {
        // Define
        var expected = "www/themes/server/default/views/";
        var actual = ViewEngine.areas.server.url();

        // Assert
        assert.equal(actual, expected);
    });

    it("Client View Engine is Create", function () {
        // Define
        var expected = "www/themes/client/default/views/";
        var actual = ViewEngine.areas.client.url();

        // Assert
        assert.equal(actual, expected);
    });
}