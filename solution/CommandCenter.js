"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandCenter = void 0;
var CommandCenter = /** @class */ (function () {
    function CommandCenter() {
        this.visibleVehicles = [];
    }
    CommandCenter.prototype.attach = function (observer) {
        var isExist = this.visibleVehicles.includes(observer);
        if (isExist)
            return console.log("".concat(observer.identifier, " est d\u00E9j\u00E0 r\u00E9pertori\u00E9"));
        console.log("".concat(observer.identifier, " est d\u00E9sormais r\u00E9pertori\u00E9"));
        this.visibleVehicles.push(observer);
    };
    CommandCenter.prototype.detach = function (observer) {
        var observerIndex = this.visibleVehicles.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("".concat(observer.identifier, " is not in the command's center registry"));
        }
        this.visibleVehicles.splice(observerIndex, 1);
        console.log("".concat(observer.identifier, " goes off grid"));
    };
    CommandCenter.prototype.notify = function () {
        console.log('Vehicle: Notifying observers...');
        for (var _i = 0, _a = this.visibleVehicles; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    return CommandCenter;
}());
exports.CommandCenter = CommandCenter;
