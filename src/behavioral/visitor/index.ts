export interface Visitor {
    visitConcreteElementA(element: ConcreteElementA): void;
    visitConcreteElementB(element: ConcreteElementB): void;
}

export abstract class Element {
    abstract accept(visitor: Visitor): void;
}

export class ConcreteElementA extends Element {
    accept(visitor: Visitor): void {
        visitor.visitConcreteElementA(this);
    }
}

export class ConcreteElementB extends Element {
    accept(visitor: Visitor): void {
        visitor.visitConcreteElementB(this);
    }
}