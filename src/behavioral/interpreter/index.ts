export abstract class Expression {
    public abstract interpret(context: string): number;
}