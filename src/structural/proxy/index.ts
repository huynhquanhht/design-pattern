export interface Subject {
    request(): void;
}

export class RealSubject implements Subject {
    public request(): void {
        console.log("RealSubject: Handling request.");
    }
}

export class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor() {
        this.realSubject = new RealSubject();
    }

    public request(): void {
        console.log("Proxy: Logging request.");
        this.realSubject.request();
    }
}