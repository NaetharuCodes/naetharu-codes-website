---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "React: Hooks"
pubDate: 12/03/2024
description: "React Hooks."
author: "James Bridge"
url: "react-context"
tags: ["React", "Hooks", "development"]
---

# Understanding React Hooks: A Comprehensive Guide

React Hooks revolutionized the way we write functional components in React. Introduced in React 16.8, Hooks allow you to use state and other React features without writing a class. Let's dive into how they work and why they're so powerful.

## What are React Hooks?

React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.

The most commonly used Hooks are:

1. useState
2. useEffect
3. useContext

Let's explore each of these in detail.

## useState: Managing State in Functional Components

The useState Hook lets you add state to functional components. Here's a simple example:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

useState returns an array with two elements: the current state value and a function to update it. You can call this function from an event handler or somewhere else.
useEffect: Performing Side Effects
The useEffect Hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

```jsx
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In this example, useEffect updates the document title after React updates the DOM.
useContext: Consuming Context
useContext makes it easier to consume React context in functional components:

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

This allows you to subscribe to React context without introducing nesting.
Why Use Hooks?

Reuse stateful logic: Hooks allow you to reuse stateful logic without changing your component hierarchy.
Separate concerns: Hooks let you split one component into smaller functions based on what pieces are related, rather than forcing a split based on lifecycle methods.
Use state without classes: You can use state and other React features without writing a class, making your code more readable and easier to maintain.

Conclusion
React Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. They don't fundamentally change how React works, but they offer a more ergonomic way to reuse stateful logic in your components.
By mastering Hooks, you can write more concise and easier-to-understand React code, leading to more maintainable applications.
