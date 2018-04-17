"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("./user.controller");
var userCtrl;
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        userCtrl = new user_controller_1.default();
    }
    UserRoutes.prototype.index = function (req, res) {
        userCtrl.getAll(req, res);
    };
    UserRoutes.prototype.create = function (req, res) {
        userCtrl.createUser(req, res);
    };
    UserRoutes.prototype.findOne = function (req, res) {
        userCtrl.getById(req, res);
    };
    UserRoutes.prototype.update = function (req, res) {
        userCtrl.updateUser(req, res);
    };
    UserRoutes.prototype.destroy = function (req, res) {
        userCtrl.deleteUser(req, res);
    };
    return UserRoutes;
}());
exports.default = UserRoutes;
