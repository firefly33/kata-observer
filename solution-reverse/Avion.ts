import { Observer } from "../example/Observer";
import { Subject } from "../example/Subject";
import { CentreDeCommande } from "./CentreDeCommande";

export class Avion implements Observer {

    public identifier: string;

    constructor (identifier: string) {
        this.identifier = identifier
    }

    public update(subject: Subject): void {
        console.log(`[${this.identifier}] : ${this.identifier} a capté le message en provenance de ${subject.identifier}`);

        if (subject instanceof CentreDeCommande && subject.state < 3) {
        }
    }

}