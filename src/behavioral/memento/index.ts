export class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}

export class Originator {
    private state: string;

    public setState(state: string): void {
        this.state = state;
    }

    public createMemento(): Memento {
        return new Memento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
    }

    public getState(): string {
        return this.state;
    }
}