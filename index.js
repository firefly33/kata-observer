"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CentreDeCommande_1 = require("./solution-reverse/CentreDeCommande");
var SousMarin_1 = require("./solution-reverse/SousMarin");
var Avion_1 = require("./solution-reverse/Avion");
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
var centre = new CentreDeCommande_1.CentreDeCommande("COMMAND_1");
var sub1 = new SousMarin_1.SousMarin("SUB_1");
var sub2 = new SousMarin_1.SousMarin("SUB_2");
var sub3 = new SousMarin_1.SousMarin("SUB_3");
var avion1 = new Avion_1.Avion("NIGHTWING_1");
centre.attach(avion1);
sub1.attach(centre);
sub3.attach(centre);
sub1.notify();
