export interface Mediator {
    notify(sender: object, event: string): void;
}

export class ConcreteMediator implements Mediator {
    private colleague1: Colleague1;
    private colleague2: Colleague2;

    constructor(colleague1: Colleague1, colleague2: Colleague2) {
        this.colleague1 = colleague1;
        this.colleague2 = colleague2;
        this.colleague1.setMediator(this);
        this.colleague2.setMediator(this);
    }

    notify(sender: object, event: string): void {
        if (sender === this.colleague1 && event === "A") {
            console.log("Mediator reacts on A and triggers B");
            this.colleague2.doB();
        } else if (sender === this.colleague2 && event === "B") {
            console.log("Mediator reacts on B and triggers A");
            this.colleague1.doA();
        }
    }
}

export class Colleague1 {
    private mediator: Mediator;

    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }

    doA() {
        console.log("Colleague1 does A");
        this.mediator.notify(this, "A");
    }
}

export class Colleague2 {
    private mediator: Mediator;

    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }

    doB() {
        console.log("Colleague2 does B");
        this.mediator.notify(this, "B");
    }
}