---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Github: How to Deploy to Github Pages"
pubDate: 31/03/2024
description: "Get a basic website up and running on Github Pages."
author: "James Bridge"
url: "deploy-site-to-github-pages"
tags: ["Development", "Github", "Deployment", "Hosting"]
---

One of the easiest and quickest ways to deploy a website is via Github Pages. This guide will walk you through the process.

### Step One

Navigate into your project in Github and find the Settings tab on the top menu.

![alt: settings](https://i.imgur.com/cDogRE1.png)

Inside settings, choose **Pages** option within the Code and automation menu.

![alt: code and automation menu](https://i.imgur.com/qiujikg.png)

Choose GitHub Actions from under the Source options. We will be using this to build and deploy each time we update the website.

Now choose to create a new script. You will need to add a YAML build script to your project. You can copy this one:

```yaml
# Simple workflow for deploying static content to GitHub Pages V2
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: "npm"
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          # Upload dist repository
          path: "./dist"
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

This will now run each time your main branch changes, and deploy the results to your live page.

Deployment can take a few moments. Once live you can click on the Visit Site button at the top of the Pages section to visit your live site. By default you will have a github subdomain. You can also add in a custom domain if you own one, by adding the domain to the **Custom Domain** box under the section where you chose the source.

Remember that if you do use a custom domain you will need to ensure that your DNS records are properly configured
