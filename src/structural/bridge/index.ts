export interface Implementor {
    operationImpl(): string;
}

export class Abstraction {
    protected implementor: Implementor;

    constructor(implementor: Implementor) {
        this.implementor = implementor;
    }

    operation(): string {
        return `Abstraction: Base operation with:\n${this.implementor.operationImpl()}`;
    }
}

export class ConcreteImplementorA implements Implementor {
    operationImpl(): string {
        return 'ConcreteImplementorA: Here\'s the result on the platform A.';
    }
}

export class ConcreteImplementorB implements Implementor {
    operationImpl(): string {
        return 'ConcreteImplementorB: Here\'s the result on the platform B.';
    }
}