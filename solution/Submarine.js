"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submarine = void 0;
var CommandCenter_1 = require("./CommandCenter");
/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
var Submarine = /** @class */ (function () {
    function Submarine(identifier) {
        this.identifier = identifier;
    }
    Submarine.prototype.update = function (subject) {
        console.log(subject);
        if (subject instanceof CommandCenter_1.CommandCenter && subject.state < 3) {
            console.log('Submarine: Reacted to the event from the command center');
        }
    };
    Submarine.prototype.goOffGrid = function (commandCenter) {
        commandCenter.detach(this);
    };
    return Submarine;
}());
exports.Submarine = Submarine;
