export class Facade {
    private subsystemA: SubsystemA;
    private subsystemB: SubsystemB;
    private subsystemC: SubsystemC;

    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
        this.subsystemC = new SubsystemC();
    }

    public operation(): void {
        this.subsystemA.operationA();
        this.subsystemB.operationB();
        this.subsystemC.operationC();
    }
}

class SubsystemA {
    public operationA(): void {
        console.log("Subsystem A: Ready!");
    }
}

class SubsystemB {
    public operationB(): void {
        console.log("Subsystem B: Ready!");
    }
}

class SubsystemC {
    public operationC(): void {
        console.log("Subsystem C: Ready!");
    }
}