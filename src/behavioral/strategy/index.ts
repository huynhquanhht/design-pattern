export interface Strategy {
    execute(data: any): void;
}

export class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    executeStrategy(data: any) {
        this.strategy.execute(data);
    }
}

// Example concrete strategies
export class ConcreteStrategyA implements Strategy {
    execute(data: any): void {
        console.log("Executing strategy A with data:", data);
    }
}

export class ConcreteStrategyB implements Strategy {
    execute(data: any): void {
        console.log("Executing strategy B with data:", data);
    }
}