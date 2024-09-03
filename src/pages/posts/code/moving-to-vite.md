---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Vite: Migrating from Create React App"
pubDate: 12/01/2024
description: "Moving from Create React App to Vite."
author: "James Bridge"
url: "moving-to-vite"
tags: ["Developement", "React", "Vite"]
---

# Migrating from Create React App to Vite: A Developer's Guide

If you've been in the React ecosystem for a while, chances are you've used Create React App (CRA) to bootstrap your projects. It's been a reliable tool, but as web development evolves, new solutions emerge. Enter Vite, a build tool that's been gaining traction due to its speed and simplicity. Let's explore why and how you might want to make the switch from CRA to Vite.

## Why Consider Moving to Vite?

Before we dive into the migration process, let's understand why Vite is becoming a popular alternative to CRA:

1. **Faster Development Server**: Vite uses native ES modules, resulting in lightning-fast hot module replacement (HMR).

2. **Quicker Build Times**: Vite's build process is significantly faster, especially for larger projects.

3. **Leaner Configuration**: Vite aims for simplicity, with less configuration out of the box.

4. **Better TypeScript Support**: Vite has excellent TypeScript integration without additional setup.

5. **More Flexibility**: Vite isn't React-specific, allowing easier integration of other frameworks if needed.

## The Migration Process

Let's walk through the steps to migrate your CRA project to Vite:

### 1. Create a New Vite Project

First, let's create a new Vite project:

```bash
npm create vite@latest my-vite-app -- --template react
cd my-vite-app
npm install
```

### 2. Move Your Source Files

Copy your `src` directory from your CRA project to the new Vite project. Vite uses a similar structure, so most of your code should work as-is.

### 3. Update Entry Point

Vite uses `index.html` as the entry point. Move your `index.html` from `public` to the root directory and update it:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Note the `type="module"` on the script tag and the path to `main.jsx`.

### 4. Rename Index File

Rename `index.js` to `main.jsx` (or `main.tsx` for TypeScript projects) to match Vite's convention.

### 5. Update Import Statements

Vite handles imports differently. Update your import statements to include file extensions for non-JavaScript files:

```javascript
import Logo from "./logo.svg"; // CRA
import Logo from "./logo.svg"; // Vite (no change needed for SVGs)

import "./App.css"; // CRA
import "./App.css"; // Vite (no change needed for CSS)
```

### 6. Environment Variables

Vite uses a different prefix for environment variables. Update your `.env` files:

```
REACT_APP_API_URL=https://api.example.com  # CRA
VITE_API_URL=https://api.example.com  # Vite
```

And update how you access them in your code:

```javascript
console.log(process.env.REACT_APP_API_URL); // CRA
console.log(import.meta.env.VITE_API_URL); // Vite
```

### 7. Update Scripts in package.json

Replace your CRA scripts with Vite equivalents:

```json
{
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "serve": "vite preview"
  }
}
```

### 8. Handle CSS Modules

If you're using CSS Modules, update your import statements:

```javascript
import styles from "./Button.module.css"; // CRA
import styles from "./Button.module.css"; // Vite (no change needed)
```

### 9. Update Test Setup

Vite doesn't include a test runner, so you'll need to set up testing separately. Consider using Vitest, which integrates well with Vite:

```bash
npm install -D vitest
```

Then update your `package.json`:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

### 10. Static Assets

Move your `public` folder to the root of your Vite project. Vite will treat this as the public directory.

### 11. Update Build Output

Vite's build output goes to a `dist` folder instead of CRA's `build` folder. Update any deployment scripts accordingly.

## Potential Challenges

While migrating, you might encounter a few challenges:

1. **Webpack-specific Features**: If you relied on Webpack-specific features, you might need to find Vite alternatives or plugins.

2. **Custom CRA Configurations**: If you ejected your CRA app or used `react-app-rewired`, you'll need to translate these configurations to Vite's `vite.config.js`.

3. **Absolute Imports**: Update your jsconfig.json or tsconfig.json to use Vite's alias feature for absolute imports.

## Conclusion

Migrating from Create React App to Vite can significantly improve your development experience, especially in terms of speed. While the process involves a few steps, the benefits in faster build times and a more streamlined development process can be worth the effort.

Remember, every project is unique, so you might encounter specific issues not covered here. Always test thoroughly after migration to ensure everything works as expected.

Have you made the switch from CRA to Vite? What was your experience like? Share your thoughts and any tips you might have for fellow developers making this transition!
