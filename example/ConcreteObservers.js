"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteObserverB = exports.ConcreteObserverA = void 0;
var ConcreteSubject_1 = require("./ConcreteSubject");
/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
var ConcreteObserverA = /** @class */ (function () {
    function ConcreteObserverA() {
    }
    ConcreteObserverA.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject_1.ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    };
    return ConcreteObserverA;
}());
exports.ConcreteObserverA = ConcreteObserverA;
var ConcreteObserverB = /** @class */ (function () {
    function ConcreteObserverB() {
    }
    ConcreteObserverB.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject_1.ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    };
    return ConcreteObserverB;
}());
exports.ConcreteObserverB = ConcreteObserverB;
