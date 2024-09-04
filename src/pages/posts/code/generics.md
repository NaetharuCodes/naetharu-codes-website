---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Generics in TypeScript"
pubDate: 10/06/2024
description: "Generics in Typescript."
author: "James Bridge"
url: "generics-in-ts"
tags: ["Development", "Generics", "Typescript"]
---

# TypeScript Generics Explained with Concrete Examples

Generics are a powerful feature in TypeScript that allow you to write flexible, reusable code while maintaining type safety. They enable you to create components that can work with a variety of types rather than a single one. Let's dive into generics with some concrete examples.

## Basic Generic Function

Let's start with a simple generic function:

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");  // type of output1 is 'string'
let output2 = identity<number>(100);         // type of output2 is 'number'
```

Here, `T` is a type variable that gets replaced with an actual type when the function is called. TypeScript can also infer the type:

```typescript
let output3 = identity("myString");  // TypeScript infers the type as string
```

## Generic Interfaces

Generics can be used with interfaces to create reusable component structures:

```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

## Generic Classes

Classes can also leverage generics:

```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zeroValue: T, addFn: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = addFn;
    }
}

let stringNumeric = new GenericNumber<string>('', (x, y) => x + y);
console.log(stringNumeric.add('Hello ', 'World'));  // Outputs: Hello World

let numberNumeric = new GenericNumber<number>(0, (x, y) => x + y);
console.log(numberNumeric.add(5, 10));  // Outputs: 15
```

## Generic Constraints

Sometimes you want to limit the types that can be used with a generic. You can do this using constraints:

```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity({length: 10, value: 3});  // This works
// loggingIdentity(3);  // This would be an error
```

## Using Type Parameters in Generic Constraints

You can declare a type parameter that is constrained by another type parameter:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a"));  // Okay
// console.log(getProperty(x, "m"));  // Error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
```

## Generic Array Functions

Here's an example of a function that works with arrays of any type:

```typescript
function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);  // Outputs: [5, 4, 3, 2, 1]

const strings = ["a", "b", "c", "d"];
const reversedStrings = reverseArray(strings);
console.log(reversedStrings);  // Outputs: ["d", "c", "b", "a"]
```

## Generic Promise Handling

Generics are particularly useful when working with Promises:

```typescript
function wrapInPromise<T>(value: T): Promise<T> {
    return new Promise<T>((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, 1000);
    });
}

async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}

interface User {
    id: number;
    name: string;
}

// Usage
wrapInPromise("Hello, Generics!")
    .then(result => console.log(result));  // Outputs after 1 second: Hello, Generics!

fetchData<User>("https://api.example.com/user/1")
    .then(user => console.log(user.name));
```

## Generic React Components

If you're using TypeScript with React, you can create generic components:

```typescript
interface Props<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: Props<T>) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}

// Usage
interface User {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

function App() {
    return (
        <List<User> 
            items={users} 
            renderItem={(user) => user.name} 
        />
    );
}
```

These examples demonstrate how generics in TypeScript provide flexibility while maintaining type safety. They're particularly useful for creating reusable components, functions, and data structures that can work with multiple types.