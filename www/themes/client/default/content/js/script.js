/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   App.Client.Home
    * Version       :   @package.js.version
    * Description   :   Application Client Home Script
    * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
    * Licence       :   MIT
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Package       :   No Package / Web Application
    * Repository    :   https://bitbucket.org/azmisahin/node1
    * Homepage      :   https://azmisahin.bitbucket.io
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/

ApplicationClientHome.Name = 'Manager Application';
ApplicationClientHome.Version = 'v0.0.0.1';
ApplicationClientHome.Debug = true;
ApplicationClientHome.prototype = (function () {
    // Init
    // Initialize Test
    function Init() {
        console.log("Application Client Version : " + version()); Debugger();
    }
    //Debug
    function Debugger() {
        if (!ApplicationClientHome.Debug) {
            console = console || {};
            console.log = function () { };
        }
    }
    /*
    version
    ────────────────────────────────────────────────────────────────────────────────────────────────────*/
    function version() {
        return "0.0.0.1";
    }
    /*
    Public Functions
    ────────────────────────────────────────────────────────────────────────────────────────────────────*/
    return {
        constructor: ApplicationClientHome
        , Version: function () { return version() }
        , init: function () { Init(); }
    }

})();
ApplicationClientHome = new ApplicationClientHome();
/// <returns type="ApplicationClientHome" />
function ApplicationClientHome() { this.init(); }