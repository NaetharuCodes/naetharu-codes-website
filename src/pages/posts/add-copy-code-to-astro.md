---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Astro: Add a Copy Button to Code Blocks"
pubDate: 31/03/2024
description: "Tutorial on how to add a copy button to astro code blocks in md docs."
author: "James Bridge"
url: "astro-add-copy-button-to-code-blocks"
tags: ["Development", "Astro", "Markdown"]
---

This script goes through your page, and looks for all of the "\<pre>" elemments. It then creates a div wrapper around each of these elements, and sets up a button to sit on the top right hand side.

It also configures a simple message to the user to confirm once code has been copied.

The styles are designed to work well with the basic astro md formatting that comes with tailwind prose class. If you are not using prose, or wish for a different color scheme then you may need to adjust the styles accordingly.

```

  document.querySelectorAll("pre").forEach((pre) => {
    // Create wrapper, button, and message elements
    const wrapper = document.createElement("div");
    const button = document.createElement("button");
    const message = document.createElement("div");

    // Set up the wrapper and button
    wrapper.style.position = "relative";
    button.textContent = "Copy Code";
    button.style.position = "absolute";
    button.style.top = "0";
    button.style.right = "0";
    button.style.background = "#FF6D2D";
    button.style.color = "#2F2F2F";
    button.style.padding = "5px 12px";
    pre.style.paddingTop = "3.5rem";
    pre.style.whiteSpace = "pre-wrap";
    pre.style.wordBreak = "break-word";

    // Set up the message
    message.style.position = "absolute";
    message.style.bottom = "20px";
    message.style.right = "0";
    message.style.background = "black";
    message.style.color = "white";
    message.style.padding = "5px";
    message.style.borderRadius = "5px";
    message.style.display = "none";

    message.textContent = "Code Copied!";

    // Add wrapper and button to the DOM
    pre.parentNode?.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    wrapper.appendChild(button);
    wrapper.appendChild(message);

    // Copy action
    button.addEventListener("click", () => {
      navigator.clipboard
        .writeText(pre.textContent!)
        .then(() => {
          // Show message
          message.style.display = "block";

          // Hide message after 2 seconds
          setTimeout(() => {
            message.style.display = "none";
          }, 2000);
        })
        .catch((err) => console.error("Error copying text: ", err));
    });
  });

```
