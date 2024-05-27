---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "React: Context Provider"
pubDate: 17/04/2024
description: "React Context Providers."
author: "James Bridge"
url: "react-context"
tags: ["React", "Context", "development"]
---

# React Context

React Context allows us to share state across an application easily. Normally, we would have to pass state down from parent to child components. While this is fine in many cases, there are instances where it is less than ideal. Either because we have to drill down through many layers of props, or because we need to share that same state widely across the application.

## Classic Examples of Context

### Authentication

If we allow our users to log into our webpage or application we need to know their authentication state regardless of where they are within the app. The standard approach to this is to create an authentication context at the top level of the app, so that we can share the key authentication information throughout. This allows us to properly manage the user journey thorugh the application, to log them out in the event of an authentication error, allow them to access protected content by using proper auth validation checks, and to carry out other authentication based functionality.

### Theme Switching

Theme switching is common in apps. Light and Dark mode are the most frequent examples, but we often see more interesting options too. A context provider can allow the app globally access the theme.

## How it works in practice

We use the createContext() hook to make a context. We then build a functional component, and return the context we created as follows:

```js
const DemoContext = createContext();

const contextComponent = ({ children }) => {
  return <DemoContext.Provider>{children}</DemoContext.Provider>;
};
```

We can do all of the normal things possible in a functional component here. We can write functions before the return statment, maintain state, and use other hooks as needed. To use the context we simply wrap a portion of our application with the context provider. Where we place the provider will depend on the nature of the context. Some cases - such as authentication and theme switching - will generally be wrapped around the entire application. However, other cases may be better suited to sitting further into an application and wrapping only the relevent portion.

```js
const app = () => {
  <DemoContext>
    <AllOtherContent />
  </DemoContext>;
};
```
