import { CentreDeCommande } from './solution-reverse/CentreDeCommande';


/**
 * The client code.
 */

import { ConcreteObserverA, ConcreteObserverB } from "./example/ConcreteObservers";
import { ConcreteSubject } from "./example/ConcreteSubject";
import { CommandCenter } from "./solution/CommandCenter";
import { Submarine } from "./solution/Submarine";
import { SousMarin } from './solution-reverse/SousMarin';
import { Avion } from './solution-reverse/Avion';

/*
const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();*/


// SOLUTION, the command center is the subject
/*
const base = new CommandCenter();

const lEffroyable = new Submarine("EFFROYABLE")
const challengerDeep = new Submarine("CHALLENGER_DEEP")

base.attach(lEffroyable)
base.notify()
lEffroyable.goOffGrid(base)*/


// SOLUTION REVERSE, the submarines are the subjects

const centre = new CentreDeCommande("COMMAND_1")

const sub1 = new SousMarin("SUB_1");
const sub2 = new SousMarin("SUB_2");
const sub3 = new SousMarin("SUB_3");

const avion1 = new Avion("NIGHTWING_1");
centre.attach(avion1);

sub1.attach(centre);
sub3.attach(centre);

sub1.notify();