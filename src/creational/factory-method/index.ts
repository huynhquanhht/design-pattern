export interface Creator {
    factoryMethod(): Product;
}

export interface Product {
    operation(): string;
}

export class ConcreteCreatorA implements Creator {
    factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

export class ConcreteCreatorB implements Creator {
    factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

export class ConcreteProductA implements Product {
    operation(): string {
        return 'Result of ConcreteProductA';
    }
}

export class ConcreteProductB implements Product {
    operation(): string {
        return 'Result of ConcreteProductB';
    }
}