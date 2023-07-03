import { Vehicle } from "./Vehicle";

export interface Subject {
    // Attach an observer to the subject.
    attach(observer: Vehicle): void;

    // Detach an observer from the subject.
    detach(observer: Vehicle): void;

    // Notify all observers about an event.
    notify(): void;
}