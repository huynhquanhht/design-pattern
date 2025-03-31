export interface Component {
    operation(): string;
}

export class ConcreteComponent implements Component {
    operation(): string {
        return "ConcreteComponent";
    }
}

export class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    operation(): string {
        return this.component.operation();
    }
}