"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SousMarin = void 0;
var SousMarin = /** @class */ (function () {
    function SousMarin(identifier) {
        this.observers = [];
        this.identifier = identifier;
    }
    SousMarin.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist)
            return console.log("[".concat(this.identifier, "] : ").concat(observer.identifier, " est d\u00E9j\u00E0 r\u00E9pertori\u00E9"));
        console.log("[".concat(this.identifier, "] : ").concat(observer.identifier, " est d\u00E9sormais r\u00E9pertori\u00E9"));
        this.observers.push(observer);
    };
    SousMarin.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("[".concat(this.identifier, "] : ").concat(observer.identifier, " n'est pas r\u00E9pertori\u00E9"));
        }
        this.observers.splice(observerIndex, 1);
        console.log("[".concat(this.identifier, "] : nous quittons la surveillance de ").concat(observer.identifier));
    };
    SousMarin.prototype.notify = function () {
        console.log("[".concat(this.identifier, "] : transmission d'infos aux centres..."));
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    return SousMarin;
}());
exports.SousMarin = SousMarin;
