export interface AbstractFactory {
    createProductA(): ProductA;
    createProductB(): ProductB;
}

export interface ProductA {
    operationA(): string;
}

export interface ProductB {
    operationB(): string;
}

export class ConcreteFactory1 implements AbstractFactory {
    createProductA(): ProductA {
        return new ProductA1();
    }

    createProductB(): ProductB {
        return new ProductB1();
    }
}

export class ConcreteFactory2 implements AbstractFactory {
    createProductA(): ProductA {
        return new ProductA2();
    }

    createProductB(): ProductB {
        return new ProductB2();
    }
}

class ProductA1 implements ProductA {
    operationA(): string {
        return 'Result of ProductA1';
    }
}

class ProductA2 implements ProductA {
    operationA(): string {
        return 'Result of ProductA2';
    }
}

class ProductB1 implements ProductB {
    operationB(): string {
        return 'Result of ProductB1';
    }
}

class ProductB2 implements ProductB {
    operationB(): string {
        return 'Result of ProductB2';
    }
}