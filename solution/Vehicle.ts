import { Subject } from "./Subject";

export interface Vehicle {
    identifier?: string;
    update(subject: Subject): void;
}
