"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CentreDeCommande = void 0;
var SousMarin_1 = require("./SousMarin");
var CentreDeCommande = /** @class */ (function () {
    function CentreDeCommande(identifier) {
        //#endregion
        //#region Subject part
        this.observers = [];
        this.identifier = identifier;
    }
    //#region Observer part
    CentreDeCommande.prototype.update = function (subject) {
        console.log("[".concat(this.identifier, "] : ").concat(this.identifier, " a capt\u00E9 le message en provenance de ").concat(subject.identifier));
        this.notify();
        if (subject instanceof SousMarin_1.SousMarin) {
            this.notifyPersonalPlane(subject.avionAssocierCode);
        }
    };
    CentreDeCommande.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist)
            return console.log(": [".concat(this.identifier, "] ").concat(observer.identifier, " est d\u00E9j\u00E0 r\u00E9pertori\u00E9"));
        console.log("[".concat(this.identifier, "] : ").concat(observer.identifier, " est d\u00E9sormais r\u00E9pertori\u00E9"));
        this.observers.push(observer);
    };
    CentreDeCommande.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("[".concat(this.identifier, "] : ").concat(observer.identifier, " n'est pas r\u00E9pertori\u00E9"));
        }
        this.observers.splice(observerIndex, 1);
        console.log("[".concat(this.identifier, "] : nous quittons la surveillance de ").concat(observer.identifier));
    };
    CentreDeCommande.prototype.notify = function () {
        console.log("[".concat(this.identifier, "] : transmission du message ..."));
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    CentreDeCommande.prototype.notifyPersonalPlane = function (code) {
        console.log("[".concat(this.identifier, "] : transmission du message ..."));
        var plane = this.observers.find(function (x) { return x.identifier === code; });
    };
    return CentreDeCommande;
}());
exports.CentreDeCommande = CentreDeCommande;
