export interface Command {
    execute(): void;
}

export class Invoker {
    private command: Command;

    setCommand(command: Command): void {
        this.command = command;
    }

    executeCommand(): void {
        if (this.command) {
            this.command.execute();
        }
    }
}