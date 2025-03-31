export interface Observer {
    update(data: any): void;
}

export interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(data: any): void;
}

export class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: any;

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data: any): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }

    setState(state: any): void {
        this.state = state;
        this.notify(state);
    }

    getState(): any {
        return this.state;
    }
}