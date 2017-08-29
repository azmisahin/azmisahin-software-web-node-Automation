// Global Requared
var assert = require("assert");
var chai = require('chai');
var expect = chai.expect;

// Test Object
var NodeTest = require('../');

'use strict';

/**
 * Test Iteration
 * 
 */
module.exports = function () {
    it("NodeTest Instance Create", function () {

        // Define
        var expected = NodeTest;
        var actual = new NodeTest();
    
        // Expect
        expect(actual).to.be.an.instanceof(expected);
    });
}