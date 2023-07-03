import { Subject } from "../example/Subject";
import { CentreDeCommande } from "./CentreDeCommande";

export class SousMarin implements Subject {
    
    public identifier: string;

    public avionAssocierCode: string;
    
    public state?: number;

    private observers: CentreDeCommande[] = [];
    
    constructor (identifier: string) {
        this.identifier = identifier
    }

    public attach(observer: CentreDeCommande): void {
        const isExist = this.observers.includes(observer);
        if (isExist) return console.log(`[${this.identifier}] : ${observer.identifier} est déjà répertorié`);

        console.log(`[${this.identifier}] : ${observer.identifier} est désormais répertorié`);
        this.observers.push(observer);
    }

    public detach(observer: CentreDeCommande): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log(`[${this.identifier}] : ${observer.identifier} n'est pas répertorié`);
        }

        this.observers.splice(observerIndex, 1);
        console.log(`[${this.identifier}] : nous quittons la surveillance de ${observer.identifier}`);
    }

    public notify(): void {
        console.log(`[${this.identifier}] : transmission d'infos aux centres...`);
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}