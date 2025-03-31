# Design Patterns Project

This project showcases 25 different design patterns implemented in TypeScript. Each design pattern is organized into its own folder under the `src` directory, categorized into three main types: Creational, Structural, and Behavioral.

## Project Structure

```
design-patterns-project
├── src
│   ├── creational
│   │   ├── abstract-factory
│   │   ├── builder
│   │   ├── factory-method
│   │   ├── prototype
│   │   └── singleton
│   ├── structural
│   │   ├── adapter
│   │   ├── bridge
│   │   ├── composite
│   │   ├── decorator
│   │   ├── facade
│   │   ├── flyweight
│   │   └── proxy
│   ├── behavioral
│   │   ├── chain-of-responsibility
│   │   ├── command
│   │   ├── interpreter
│   │   ├── iterator
│   │   ├── mediator
│   │   ├── memento
│   │   ├── observer
│   │   ├── state
│   │   ├── strategy
│   │   ├── template-method
│   │   └── visitor
├── package.json
├── tsconfig.json
└── README.md
```

## Design Patterns Included

### Creational Patterns
1. **Abstract Factory**: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
2. **Builder**: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
3. **Factory Method**: Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.
4. **Prototype**: Creates new objects by copying an existing object, known as the prototype.
5. **Singleton**: Ensures a class has only one instance and provides a global point of access to it.

### Structural Patterns
6. **Adapter**: Allows incompatible interfaces to work together by converting the interface of a class into another interface that clients expect.
7. **Bridge**: Separates an object’s interface from its implementation, allowing the two to vary independently.
8. **Composite**: Composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions uniformly.
9. **Decorator**: Adds new functionality to an object dynamically without altering its structure.
10. **Facade**: Provides a simplified interface to a complex subsystem.
11. **Flyweight**: Reduces the cost of creating and manipulating a large number of similar objects by sharing common parts.
12. **Proxy**: Provides a surrogate or placeholder for another object to control access to it.

### Behavioral Patterns
13. **Chain of Responsibility**: Passes a request along a chain of handlers, allowing multiple objects to handle the request without the sender needing to know which object will handle it.
14. **Command**: Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.
15. **Interpreter**: Defines a representation for a grammar and an interpreter that uses the representation to interpret sentences in the language.
16. **Iterator**: Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
17. **Mediator**: Defines an object that encapsulates how a set of objects interact, promoting loose coupling.
18. **Memento**: Captures and externalizes an object’s internal state without violating encapsulation, allowing the object to be restored to this state later.
19. **Observer**: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
20. **State**: Allows an object to alter its behavior when its internal state changes, appearing to change its class.
21. **Strategy**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable, allowing the algorithm to vary independently from clients that use it.
22. **Template Method**: Defines the skeleton of an algorithm in a method, deferring some steps to subclasses.
23. **Visitor**: Represents an operation to be performed on the elements of an object structure, allowing you to define a new operation without changing the classes of the elements on which it operates.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd design-patterns-project
npm install
```

You can then run the TypeScript compiler to compile the code:

```bash
npx tsc
```

Explore each design pattern in the `src` directory to see how they are implemented in TypeScript.