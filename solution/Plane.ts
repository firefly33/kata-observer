import { CommandCenter } from "./CommandCenter";
import { Subject } from "./Subject";
import { Vehicle } from "./Vehicle";

export class Plane implements Vehicle {
    public identifier: string;

    constructor (identifier: string) {
        this.identifier = identifier
    }

    public update(subject: Subject): void {
        if (subject instanceof CommandCenter && subject.state < 3) {
            console.log('Submarine: Reacted to the event.');
        }
    }
}