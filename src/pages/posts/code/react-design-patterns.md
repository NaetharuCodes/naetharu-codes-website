---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "React: Design Patterns"
pubDate: 117/03/2024
description: "React Design Patterns."
author: "James Bridge"
url: "react-design-patterns"
tags: ["React", "Design", "development"]
---

# Essential React Design Patterns

## 1. Introduction to React Design Patterns

React design patterns are reusable solutions to common problems in React application development. They help developers write more efficient, maintainable, and scalable code. In this article, we'll explore several key design patterns across different aspects of React development, including component structure, state management, performance optimization, and code reusability.

## 2. Component Patterns

### a) Compound Components

Compound components allow you to create a group of components that work together to form a cohesive unit. This pattern is useful for creating flexible and reusable component sets.

Example:

```jsx
const Toggle = ({ children }) => {
  const [on, setOn] = React.useState(false);
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { on, toggle: () => setOn(!on) })
  );
};

Toggle.On = ({ on, children }) => (on ? children : null);
Toggle.Off = ({ on, children }) => (on ? null : children);
Toggle.Button = ({ on, toggle }) => (
  <button onClick={toggle}>{on ? "ON" : "OFF"}</button>
);

// Usage
<Toggle>
  <Toggle.On>The toggle is on</Toggle.On>
  <Toggle.Off>The toggle is off</Toggle.Off>
  <Toggle.Button />
</Toggle>;
```

### b) Higher-Order Components (HOCs)

HOCs are functions that take a component and return a new component with additional props or behavior.
Example:

```jsx
const withLoading = (WrappedComponent) => {
  return class extends React.Component {
    state = { loading: true };

    componentDidMount() {
      setTimeout(() => this.setState({ loading: false }), 2000);
    }

    render() {
      if (this.state.loading) return <div>Loading...</div>;
      return <WrappedComponent {...this.props} />;
    }
  };
};

const MyComponent = () => <div>My Component</div>;
const EnhancedComponent = withLoading(MyComponent);
```

### c) Render Props

The render prop pattern involves passing a function as a prop to a component, which the component then uses to render its content.
Example:

```jsx
const MouseTracker = ({ render }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{render(position)}</div>;
};

// Usage
<MouseTracker
  render={({ x, y }) => (
    <h1>
      The mouse position is ({x}, {y})
    </h1>
  )}
/>;
```

## 3. State Management Patterns

### a) Lifting State Up

This pattern involves moving the state to a common ancestor when multiple components need to share the same state.
Example:

```jsx
const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <ChildComponent1 count={count} setCount={setCount} />
      <ChildComponent2 count={count} />
    </>
  );
};

const ChildComponent1 = ({ count, setCount }) => (
  <button onClick={() => setCount(count + 1)}>Increment</button>
);

const ChildComponent2 = ({ count }) => <div>Count: {count}</div>;
```

### b) Context API

The Context API allows you to share state across multiple components without explicitly passing props through every level.
Example:

```jsx
const ThemeContext = React.createContext("light");

const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
);

const Toolbar = () => <ThemedButton />;

const ThemedButton = () => {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>I'm a {theme} button</button>;
};
```

### c) Reducer Pattern (with useReducer hook)

This pattern is inspired by Redux and is useful for managing complex state logic in a single place.
Example:

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

## 4. Performance Optimization Patterns

### a) Memoization (React.memo, useMemo, useCallback)

Memoization helps prevent unnecessary re-renders and recalculations.
Example:

```jsx
// React.memo for functional components
const MyComponent = React.memo(({ data }) => {
  // Render using data
});

// useMemo for expensive calculations
const ExpensiveComponent = ({ data }) => {
  const expensiveResult = React.useMemo(() => {
    return performExpensiveCalculation(data);
  }, [data]);

  return <div>{expensiveResult}</div>;
};

// useCallback for function memoization
const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = React.useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return <ChildComponent onIncrement={incrementCount} />;
};
```

### b) Virtualization

Virtualization improves performance when rendering large lists by only rendering items that are currently visible.
Example using react-window:

```jsx
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

const MyList = () => (
  <List height={400} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);
```

### c) Code Splitting

Code splitting allows you to split your app into smaller chunks and load only what's necessary, improving initial load time.
Example using React.lazy and Suspense:

```jsx
const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </React.Suspense>
    </div>
  );
}
```

## 5. Reusability Patterns

### a) Custom Hooks

```jsx
Custom hooks allow you to extract component logic into reusable functions.
Example:

function useWindowSize() {
  const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);

  React.useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Usage
function MyComponent() {
  const [width, height] = useWindowSize();
  return <div>Window size: {width} x {height}</div>;
}
```

### b) Render Props (revisited)

We covered this earlier, but it's worth noting again as it's excellent for sharing code between components.

### c) Composition

Favoring composition over inheritance can lead to more flexible and reusable code.
Example:

```jsx
const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

const PrimaryButton = (props) => <Button className="primary" {...props} />;

const DangerButton = (props) => <Button className="danger" {...props} />;
```

## 6. Conclusion

React design patterns are powerful tools that can significantly improve the quality, efficiency, and maintainability of your code. By leveraging patterns such as Compound Components, Higher-Order Components, and Render Props, you can create more flexible and reusable component structures. State management patterns like Lifting State Up, using the Context API, and the Reducer Pattern help you handle complex state logics more effectively.

Performance optimization patterns, including memoization, virtualization, and code splitting, are crucial for building responsive and efficient React applications, especially as they scale. Finally, reusability patterns such as custom hooks and composition allow you to write DRY (Don't Repeat Yourself) code, promoting better code organization and easier maintenance.

Remember, while these patterns are valuable, it's important to use them judiciously. Not every problem requires a complex solution, and sometimes simpler code is more maintainable. As you gain experience, you'll develop a sense for when and how to apply these patterns most effectively.

By mastering these React design patterns, you'll be well-equipped to tackle a wide range of challenges in your React development journey, creating more robust, efficient, and scalable applications.
