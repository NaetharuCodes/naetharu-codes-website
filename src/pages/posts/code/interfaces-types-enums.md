---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Interfaces, Types, and Enums"
pubDate: 06/06/2024
description: "When to use Interfaces, Types and Enums."
author: "James Bridge"
url: "interfaces-types-enums"
tags: ["Typescript", "development"]
---

# TypeScript: Interfaces, Types, and Enums - When to Use Each

TypeScript provides several ways to define custom types: interfaces, type aliases, and enums. Each has its own use cases and strengths. Let's dive into each one and explore when to use them.

## Interfaces

Interfaces in TypeScript define the structure of objects. They're primarily used for type-checking and to ensure that objects adhere to a specific shape.

### Example:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  // Optional property
  readonly createdAt: Date;  // Read-only property
}

function createUser(user: User): void {
  // Implementation
}

createUser({
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date()
});
```

### When to use Interfaces:

1. **Defining object shapes**: Use interfaces when you need to define the structure of objects, especially for complex structures.

2. **Class contracts**: Interfaces are great for defining contracts that classes should adhere to.

3. **Extending and implementing**: Interfaces can extend other interfaces and can be implemented by classes.

4. **Declaration merging**: If you need to add properties to an interface later, you can redeclare it, and TypeScript will merge the declarations.

## Types

Type aliases create new names for types. They can represent not just object types, but also primitives, unions, tuples, and more.

### Example:

```typescript
type ID = string | number;

type Point = {
  x: number;
  y: number;
};

type UserRole = "admin" | "user" | "guest";

type Callback = (error: Error | null, data: any) => void;

const id: ID = "abc123";
const role: UserRole = "admin";
```

### When to use Types:

1. **Unions and intersections**: Types are great for creating union types (`|`) or intersection types (`&`).

2. **Complex types**: Use types for more complex type definitions, like mapped types or conditional types.

3. **Aliases for primitives**: When you want to give a meaningful name to a primitive type or a union of primitives.

4. **Tuples**: Types can be used to define tuple types.

5. **Function signatures**: When you want to create an alias for a function signature.

## Enums

Enums allow you to define a set of named constants. They make it easier to document intent or create a set of distinct cases.

### Example:

```typescript
enum Direction {
  North,
  South,
  East,
  West
}

enum HttpStatus {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500
}

function move(direction: Direction): void {
  // Implementation
}

move(Direction.North);

const status: HttpStatus = HttpStatus.OK;
```

### When to use Enums:

1. **Distinct values**: When you have a set of related constants that are known at compile time.

2. **Improved readability**: Enums make your intentions clearer and your code more readable.

3. **Type safety**: Enums provide type safety when you want to limit a variable to only a few possible values.

4. **Reverse mapping**: Numeric enums provide reverse mapping, allowing you to get the enum member name from its value.

## Interfaces vs Types

While interfaces and types are similar in many ways, there are some key differences:

1. **Extensibility**: Interfaces can be extended or implemented, while types cannot.

2. **Declaration merging**: You can add new properties to an interface by redeclaring it, but not to a type.

3. **Computed properties**: Types can use computed properties, while interfaces cannot.

```typescript
type Keys = "firstname" | "surname";

type DudeType = {
  [key in Keys]: string;
};

// This is not possible with interfaces
```

## Best Practices

1. Use **interfaces** for defining public APIs or when you need to take advantage of declaration merging.

2. Use **types** for complex type definitions, unions, intersections, or when you need mapped or conditional types.

3. Use **enums** when you have a fixed set of related constants.

4. Prefer **interfaces** over types for object shapes when possible, as they're more familiar to OOP developers and provide better error messages in some cases.

5. Use **type aliases** for function types and simpler object types, especially when you need unions or intersections.

By understanding the strengths and use cases of interfaces, types, and enums, you can write more expressive and type-safe TypeScript code, improving code readability and maintainability.