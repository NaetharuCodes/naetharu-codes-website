---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Typescript Overview"
pubDate: 02/06/2024
description: "Typescript Overview."
author: "James Bridge"
url: "Typescript Overview"
tags: ["Typescript", "JavaScript"]
---

# TypeScript Overview: Practical Examples

Let's dive into some concrete examples to showcase TypeScript's features and how they can be applied in real-world scenarios.

## 1. Basic Type Annotations

TypeScript allows you to specify types for variables, function parameters, and return values.

```typescript
let userName: string = "Alice";
let userAge: number = 30;
let isActive: boolean = true;

function greetUser(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greetUser(userName, userAge));
```

## 2. Interfaces for Object Shapes

Interfaces define the structure of objects, making it easier to work with complex data.

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    role: "admin" | "user";
    lastLogin?: Date;  // Optional property
}

function updateUser(user: User): void {
    console.log(`Updating user: ${user.name}`);
    // Update logic here
}

const newUser: User = {
    id: 1,
    name: "Bob",
    email: "bob@example.com",
    role: "user"
};

updateUser(newUser);
```

## 3. Classes and Inheritance

TypeScript provides full support for object-oriented programming concepts.

```typescript
abstract class Animal {
    constructor(protected name: string) {}
    abstract makeSound(): void;
}

class Dog extends Animal {
    constructor(name: string, private breed: string) {
        super(name);
    }

    makeSound(): void {
        console.log("Woof! Woof!");
    }

    getInfo(): string {
        return `${this.name} is a ${this.breed}`;
    }
}

const myDog = new Dog("Buddy", "Labrador");
console.log(myDog.getInfo());  // Output: Buddy is a Labrador
myDog.makeSound();  // Output: Woof! Woof!
```

## 4. Generics

Generics allow you to write reusable, type-safe code that works with multiple types.

```typescript
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);
console.log(firstNumber);  // Output: 1

const fruits = ["apple", "banana", "orange"];
const firstFruit = getFirstElement(fruits);
console.log(firstFruit);  // Output: "apple"
```

## 5. Union Types and Type Guards

Union types allow a value to be one of several types, and type guards help narrow down the type within a code block.

```typescript
type Result = string | number;

function processResult(result: Result): void {
    if (typeof result === "string") {
        console.log(result.toUpperCase());
    } else {
        console.log(result.toFixed(2));
    }
}

processResult("hello");  // Output: HELLO
processResult(3.14159);  // Output: 3.14
```

## 6. Async/Await with TypeScript

TypeScript works seamlessly with modern JavaScript features like async/await.

```typescript
interface Post {
    id: number;
    title: string;
    body: string;
}

async function fetchPost(id: number): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json() as Post;
}

async function displayPost(id: number): Promise<void> {
    try {
        const post = await fetchPost(id);
        console.log(`Title: ${post.title}\nBody: ${post.body}`);
    } catch (error) {
        console.error("Failed to fetch post:", error);
    }
}

displayPost(1);
```

## 7. Enums and Literal Types

Enums and literal types help in creating more expressive and self-documenting code.

```typescript
enum Color {
    Red = "#FF0000",
    Green = "#00FF00",
    Blue = "#0000FF"
}

type Direction = "North" | "South" | "East" | "West";

function move(direction: Direction, color: Color): void {
    console.log(`Moving ${direction} with trail color ${color}`);
}

move("North", Color.Blue);  // Output: Moving North with trail color #0000FF
```

These examples demonstrate how TypeScript's features can be applied in various scenarios, from basic type checking to more advanced concepts like generics and async programming. They showcase how TypeScript can make your code more robust and self-documenting, catching potential errors at compile-time and improving overall code quality.