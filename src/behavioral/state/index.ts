export interface State {
    handle(context: Context): void;
}

export class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    public setState(state: State): void {
        this.state = state;
    }

    public request(): void {
        this.state.handle(this);
    }
}

// Example concrete states
export class ConcreteStateA implements State {
    public handle(context: Context): void {
        console.log("Handling request in ConcreteStateA");
        context.setState(new ConcreteStateB());
    }
}

export class ConcreteStateB implements State {
    public handle(context: Context): void {
        console.log("Handling request in ConcreteStateB");
        context.setState(new ConcreteStateA());
    }
}