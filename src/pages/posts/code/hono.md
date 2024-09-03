---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Express to Hono"
pubDate: 14/06/2024
description: "Express vs Hono for API Servers."
author: "James Bridge"
url: "express-vs-hono"
tags: ["Developement", "Express", "Hono", "Nodejs"]
---

# From Express to Hono

As a long-time Express user, I've been hearing a lot of buzz about Hono lately. It's touted as a small, simple, and speedy web framework for the Edge. But is it worth making the switch? Let's dive into my thought process as I consider transitioning from Express to Hono.

## My Current Setup with Express

I've been using Express for years. It's been a reliable workhorse for building web applications and APIs. Here's what I love about Express:

1. **Middleware ecosystem**: The vast array of middleware available makes it easy to add functionality.
2. **Familiarity**: It's widely used, making it easy to find solutions and hire developers who know it.
3. **Flexibility**: Express is unopinionated, allowing me to structure my applications as I see fit.

But I've also faced some challenges:

1. **Performance**: As my applications grow, I've noticed some performance issues, especially under heavy load.
2. **Modern JavaScript support**: While Express works with modern JS, it wasn't built with it in mind.
3. **Bundle size**: For smaller projects or serverless functions, Express can feel a bit heavy.

## Enter Hono: The New Kid on the Block

Hono has caught my attention for several reasons:

1. **Speed**: Hono claims to be blazingly fast, even faster than Express in many scenarios.
2. **Size**: At just about 5KB, it's significantly smaller than Express.
3. **TypeScript-first**: As a TypeScript enthusiast, this is a big plus for me.
4. **Modern JavaScript**: Built with modern JS features in mind.
5. **Edge-ready**: Designed to work well in edge computing environments.

Let's break down some key areas I'm considering:

### Performance

Hono's performance claims are impressive. They show benchmarks where Hono outperforms Express significantly:

```
Hono x 78,924 ops/sec ±0.74% (91 runs sampled)
Express x 12,429 ops/sec ±0.59% (91 runs sampled)
```

While benchmarks don't always translate directly to real-world performance, this is certainly eye-catching.

### Syntax and API

Hono's API feels familiar yet modern. Here's a simple example:

```javascript
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));

export default app;
```

Compare this to Express:

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

module.exports = app;
```

The syntax is similar, which could make the transition easier. However, Hono's use of the context object (`c`) is a bit different from Express's separate `req` and `res` objects.

### Middleware

This is where I have some concerns. Express's vast middleware ecosystem is one of its strongest points. Hono has middleware support, but the ecosystem is much smaller. I'd need to evaluate which of my current middleware I can replace or recreate in Hono.

### TypeScript Support

As a TypeScript user, Hono's first-class TypeScript support is very appealing. Here's a TypeScript example:

```typescript
import { Hono } from "hono";

const app = new Hono();

app.get("/user/:id", (c) => {
  const id: string = c.req.param("id");
  return c.json({ id, name: "John" });
});

export default app;
```

The type inference and checking here are excellent, which could help catch errors early and improve development speed.

### Edge Computing

While I'm not currently deploying to edge environments, the possibility is intriguing. Hono's design makes it well-suited for platforms like Cloudflare Workers or Deno Deploy. This could open up new possibilities for my applications in the future.

## The Decision Process

As I weigh this decision, here are the key factors I'm considering:

1. **Project requirements**: For new, smaller projects or microservices, Hono seems like a great fit. For larger, existing applications, the transition might be more challenging.

2. **Performance needs**: If I'm hitting performance bottlenecks with Express, Hono's speed improvements are very attractive.

3. **Team familiarity**: While Hono's syntax is similar to Express, there would still be a learning curve for my team.

4. **Middleware requirements**: I need to carefully evaluate which Express middleware we rely on and how difficult it would be to replace them in Hono.

5. **Future plans**: If edge computing is on our roadmap, Hono could be a strategic choice.

## Conclusion: To Switch or Not to Switch?

After this analysis, I'm leaning towards giving Hono a try, but with a measured approach:

1. I'll start with a small, non-critical project to get a feel for Hono in a real-world scenario.
2. For new microservices or serverless functions, I'll consider using Hono by default.
3. For existing large applications, I'll stick with Express for now, but keep an eye on Hono's development.

The transition from Express to Hono isn't something to be taken lightly, but the potential benefits in terms of performance, size, and modern JavaScript support are compelling. As with any technology decision, it's about finding the right tool for the job. Hono certainly seems like it could be the right tool for many of my future projects.

What's your take? Have you made the switch from Express to Hono, or are you considering it? I'd love to hear about your experiences and thoughts on this transition.
