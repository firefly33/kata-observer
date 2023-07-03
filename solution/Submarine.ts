import { CommandCenter } from "./CommandCenter";
import { Subject } from "./Subject";
import { Vehicle } from "./Vehicle";


/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
export class Submarine implements Vehicle {

    public identifier: string;

    constructor (identifier: string) {
        this.identifier = identifier
    }

    public update(subject: Subject): void {
        console.log(subject)
        if (subject instanceof CommandCenter && subject.state < 3) {
            console.log('Submarine: Reacted to the event from the command center');
        }
    }

    public goOffGrid(commandCenter: Subject): void {
        commandCenter.detach(this);
    }
}