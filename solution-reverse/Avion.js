"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avion = void 0;
var CentreDeCommande_1 = require("./CentreDeCommande");
var Avion = /** @class */ (function () {
    function Avion(identifier) {
        this.identifier = identifier;
    }
    Avion.prototype.update = function (subject) {
        console.log("[".concat(this.identifier, "] : ").concat(this.identifier, " a capt\u00E9 le message en provenance de ").concat(subject.identifier));
        if (subject instanceof CentreDeCommande_1.CentreDeCommande && subject.state < 3) {
        }
    };
    return Avion;
}());
exports.Avion = Avion;
