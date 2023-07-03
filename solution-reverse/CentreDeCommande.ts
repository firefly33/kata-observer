import { Observer } from "../example/Observer";
import { Subject } from "../example/Subject";
import { Avion } from "./Avion";
import { SousMarin } from "./SousMarin";

export class CentreDeCommande implements Observer, Subject {

    public identifier: string;

    constructor (identifier: string) {
        this.identifier = identifier
    }

    //#region Observer part
    public update(subject: Subject): void {
        console.log(`[${this.identifier}] : ${this.identifier} a capté le message en provenance de ${subject.identifier}`);
        this.notify();

        if (subject instanceof SousMarin) {
            this.notifyPersonalPlane(subject.avionAssocierCode)
        }
    }
    //#endregion

    //#region Subject part
    private observers: Avion[] = [];
    public state?: number;

    public attach(observer: Avion): void {
        const isExist = this.observers.includes(observer);
        if (isExist) return console.log(`: [${this.identifier}] ${observer.identifier} est déjà répertorié`);

        console.log(`[${this.identifier}] : ${observer.identifier} est désormais répertorié`);
        this.observers.push(observer);
    }

    public detach(observer: Avion): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log(`[${this.identifier}] : ${observer.identifier} n'est pas répertorié`);
        }

        this.observers.splice(observerIndex, 1);
        console.log(`[${this.identifier}] : nous quittons la surveillance de ${observer.identifier}`);
    }

    public notify(): void {
        console.log(`[${this.identifier}] : transmission du message ...`);
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public notifyPersonalPlane(code: string): void {
        console.log(`[${this.identifier}] : transmission du message ...`);
        const plane: Avion = this.observers.find(x => x.identifier === code);
    }
    //#endregion

}