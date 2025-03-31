export interface Component {
    operation(): string;
}

export class Leaf implements Component {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    operation(): string {
        return `Leaf: ${this.name}`;
    }
}

export class Composite implements Component {
    private children: Component[] = [];

    add(child: Component): void {
        this.children.push(child);
    }

    remove(child: Component): void {
        const index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    operation(): string {
        return `Composite: [${this.children.map(child => child.operation()).join(', ')}]`;
    }
}