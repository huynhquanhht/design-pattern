export interface Target {
    request(): string;
}

export class Adaptee {
    specificRequest(): string {
        return "Specific request.";
    }
}

export class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    request(): string {
        return this.adaptee.specificRequest();
    }
}