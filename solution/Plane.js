"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plane = void 0;
const CommandCenter_1 = require("./CommandCenter");
class Plane {
    constructor(identifier) {
        this.identifier = identifier;
    }
    update(subject) {
        if (subject instanceof CommandCenter_1.CommandCenter && subject.state < 3) {
            console.log('Submarine: Reacted to the event.');
        }
    }
}
exports.Plane = Plane;
