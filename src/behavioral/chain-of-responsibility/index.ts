export abstract class Handler {
    protected nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public abstract handleRequest(request: string): void;
}