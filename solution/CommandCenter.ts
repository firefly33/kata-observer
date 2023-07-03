import { Submarine } from "./Submarine";
import { Subject } from "./Subject";
import { Vehicle } from "./Vehicle";

export class CommandCenter implements Subject {
    
    public state?: number;

    private visibleVehicles: Vehicle[] = [];
    
    public attach(observer: Vehicle): void {
        const isExist = this.visibleVehicles.includes(observer);
        if (isExist) return console.log(`${observer.identifier} est déjà répertorié`);

        console.log(`${observer.identifier} est désormais répertorié`);
        this.visibleVehicles.push(observer);
    }

    public detach(observer: Vehicle): void {
        const observerIndex = this.visibleVehicles.indexOf(observer);
        if (observerIndex === -1) {
            return console.log(`${observer.identifier} is not in the command's center registry`);
        }

        this.visibleVehicles.splice(observerIndex, 1);
        console.log(`${observer.identifier} goes off grid`);
    }

    public notify(): void {
        console.log('Vehicle: Notifying observers...');
        for (const observer of this.visibleVehicles) {
            observer.update(this);
        }
    }
}