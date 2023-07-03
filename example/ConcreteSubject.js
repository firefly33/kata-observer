"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteSubject = void 0;
/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        /**
         * @type {Observer[]} List of subscribers. In real life, the list of
         * subscribers can be stored more comprehensively (categorized by event
         * type, etc.).
         */
        this.observers = [];
    }
    /**
     * The subscription management methods.
     */
    ConcreteSubject.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    };
    ConcreteSubject.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    };
    /**
     * Trigger an update in each subscriber.
     */
    ConcreteSubject.prototype.notify = function () {
        console.log('Subject: Notifying observers...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    /**
     * Usually, the subscription logic is only a fraction of what a Subject can
     * really do. Subjects commonly hold some important business logic, that
     * triggers a notification method whenever something important is about to
     * happen (or after it).
     */
    ConcreteSubject.prototype.someBusinessLogic = function () {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log("Subject: My state has just changed to: ".concat(this.state));
        this.notify();
    };
    return ConcreteSubject;
}());
exports.ConcreteSubject = ConcreteSubject;
