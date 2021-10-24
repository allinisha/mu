"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var Routes;
(function (Routes) {
    Routes["BASE"] = "/";
    Routes["HOME"] = "/index";
    Routes["ABOUT"] = "/about";
    Routes["LOGIN"] = "/login";
    Routes["SIGNUP"] = "/signup";
    Routes["SETTINGS"] = "/settings";
    Routes["PASSWORD_RESET"] = "/reset-password";
    Routes["LIBRARY"] = "/library";
    Routes["BOOK"] = "/book/:id/index";
    Routes["CHAPTER"] = "/book/:id/:index";
})(Routes = exports.Routes || (exports.Routes = {}));
