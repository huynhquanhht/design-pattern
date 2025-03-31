export abstract class AbstractClass {
    public templateMethod(): void {
        this.doPrimitiveOperation1();
        this.doPrimitiveOperation2();
        this.doHook();
    }

    protected abstract doPrimitiveOperation1(): void;
    protected abstract doPrimitiveOperation2(): void;

    protected doHook(): void {
        // Default implementation (optional)
    }
}