export interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
}

export class Aggregate<T> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<T> {
        return new ArrayIterator(this.items);
    }
}

class ArrayIterator<T> implements Iterator<T> {
    private index: number = 0;
    private items: T[];

    constructor(items: T[]) {
        this.items = items;
    }

    public next(): T | null {
        if (this.hasNext()) {
            return this.items[this.index++];
        }
        return null;
    }

    public hasNext(): boolean {
        return this.index < this.items.length;
    }
}