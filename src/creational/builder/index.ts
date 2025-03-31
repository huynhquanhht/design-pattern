export class Builder {
    private partA: string;
    private partB: string;

    public buildPartA(): void {
        this.partA = "PartA";
    }

    public buildPartB(): void {
        this.partB = "PartB";
    }

    public getResult(): string {
        return `Builder result: ${this.partA}, ${this.partB}`;
    }
}

export class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    public construct(): void {
        this.builder.buildPartA();
        this.builder.buildPartB();
    }
}