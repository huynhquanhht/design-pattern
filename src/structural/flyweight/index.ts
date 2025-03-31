export class Flyweight {
    private intrinsicState: string;

    constructor(intrinsicState: string) {
        this.intrinsicState = intrinsicState;
    }

    public operation(extrinsicState: string): void {
        console.log(`Intrinsic State: ${this.intrinsicState}, Extrinsic State: ${extrinsicState}`);
    }
}

export class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = {};

    public getFlyweight(key: string): Flyweight {
        if (!this.flyweights[key]) {
            this.flyweights[key] = new Flyweight(key);
        }
        return this.flyweights[key];
    }

    public getFlyweightCount(): number {
        return Object.keys(this.flyweights).length;
    }
}