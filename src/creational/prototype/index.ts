export abstract class Prototype {
    abstract clone(): Prototype;
}

export class ConcretePrototypeA extends Prototype {
    private state: string;

    constructor(state: string) {
        super();
        this.state = state;
    }

    clone(): Prototype {
        return new ConcretePrototypeA(this.state);
    }

    getState(): string {
        return this.state;
    }

    setState(state: string): void {
        this.state = state;
    }
}

export class ConcretePrototypeB extends Prototype {
    private state: number;

    constructor(state: number) {
        super();
        this.state = state;
    }

    clone(): Prototype {
        return new ConcretePrototypeB(this.state);
    }

    getState(): number {
        return this.state;
    }

    setState(state: number): void {
        this.state = state;
    }
}