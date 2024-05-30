---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Concept Bleeding"
pubDate: 30/05/2024
description: "How concepts can mix in the context of a Stable Diffusion prompt."
author: "James Bridge"
url: "concept-bleeding"
tags:
  [
    "AI Art",
    "Stable Diffusion",
    "Automatic 1111",
    "Tutorial",
    "Newcomer",
    "Prompt Engineering",
    "Concept Bleeding",
  ]
---

One of the more difficult aspects of working with AI in general is concept bleeding. In this article I’ll start by explaining what concept bleeding is. And then explore how it arises in Stable Diffusion in particular, and how we can work around it to get better image results.

## Concept Embedding in Neural Networks

To properly understand what concept bleeding is we first need to understand a little about how concepts are handled in an AI model. When we train an AI, we create a high dimensional space in which different concepts are embedded in specific dimensions. The specific concept distribution is a little complicated in practice, but we can simplify the idea to get a handle on what is taking place.
Imagine we have two concepts that we are training:

- Tall
- Natural

We can place these concepts onto a 2D graph. The (x) axis describes how much tallness something exhibits. And the (y) axis how much naturalness.

![cartesian coordinages](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/0fbe0923-82d7-4741-ed02-33e5925ad000/512sqare)

Now, we can map out our different examples in our training data based on where they fall in these two dimensions. Consider four example objects we might have as images:

- A flower would be not-tall but natural.
- A house would be not tall but man-made (albeit taller than a flower).
- An ancient oak tree would be both tall and natural.
- A skyscraper would be very tall, but not natural.

To create an image (or generate text in the case of an LLM etc) of one of these objects, what we are actually doing is navigating through this concept space using vector multiplication, so that we arrive at some specific position in our space that represents the sum total of these concepts.

In our simple example we have only two dimensions and so we can’t actually represent anything meaningful – just a combination of the abstract ideas of being tall and/or natural. But in a real-world model we have many more dimensions. Depending on the model in question, these can be hundreds, thousands, or millions of dimensions. When we train the network what we are really doing is teaching it to navigate its way through this abstract high-dimensional space, so that with the appropriate input it correctly locates the location within this space that corresponds to the desired outcome.

The question of how many dimensions is needed to generate high quality results is an open topic of discussion. And in recent months there has been much discussion about over-parametrization; having more dimensions in your embedding space does not always result in a more powerful model. And we have certainly seen some evidence of this when we look at the power of LLMs like Lama3 Instruct, which despite having a vastly smaller model size than many other leading LLM models, manages to provide very high-quality outputs over a broad range of domains, with minimal hallucinations.

## What is Concept Bleeding

Concept bleeding occurs when two seemingly unrelated concepts become coupled within our model. Our simplified example above imagined that each dimension trains one and only one unique and well isolated concept. Tallness, naturalness, humanness, and so forth. But remember that when we train a neural network, we are not giving explicit instructions about the concepts that need to be created. Rather, we are using a range of indirect techniques in order to have the network infer these concepts from the training data.
As a result, the concepts we find in our real-world networks tend to fall short of being carved at the natural joints. We may find that our concept of tallness also tends toward a concept of redness. So, when we ask our model to generate an image of something tall, it tends to make that thing coloured red too. Despite our not asking for that specific coloration.

This kind of coupling can be highly problematic in some cases. For example, we may end up with a model that couples certain negative concepts with people of a specific ethnicity, or gender. And we have to be highly vigilant about these kinds of pairings. These issues can be mitigated by careful choices of training data, and close monitoring of output examples. But removing all such biases from the model is impossible.

Ideally, we would want zero concept bleeding in our model, allowing for granular control of generations. But this is not a goal that we can even hope to aim for, at least not with the current best training practices. And so, we have to find post-training fixes in order to work around the issues as best we can.

## Concept Bleeding Workarounds in Stable Diffusion

With Stable Diffusion we have some powerful tools that can aid us in working around concept bleeding issues of this kind. The most important being:

- Delayed prompting
- Prompt blending.

These two techniques exploit the iterative nature of the diffusion model and allow us to introduce concepts in a way that minimizes the impact of concept bleeding on the final image.

When we create a model in Stable Diffusion, we set the number of steps that the network will take. By default, we tend to use a 20-step process. The model starts off with an image that is pure noise. Then at each step it converts some portion of that noise into the target image. However, the key feature we can exploit here is that the focus on each of these iterative step’s changes over the full generation process.

The first steps are focused on the major compositional elements of the image. And as the process continues each successive step deals with smaller and more refined details. We can see this in practice by saving the results of our diffusion at each step.

The first step fixes the overall composition of our image:

![first step of diffusion](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/9a2f9baf-70e8-4cae-69d6-c5325ccfdd00/XLPortrait)

By step four we are starting to see some more specific details about the image appearing:

![fourth step of diffusion](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/659b8327-be90-4288-5938-fbbe69fb5a00/XLPortrait)

And by step 8 we have a largely fixed image, with further steps functioning to refine and add detail:

![eighth step of diffusion](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/0fc6bc87-1532-4e1f-e27f-0931fb261c00/XLPortrait)

The final image after step 20 looks like this:

![eighth step of diffusion](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/3791b9ef-00cd-44d3-774e-9f48be402f00/XLPortrait)

Note how the differences between the step 8 and the step 20 image are all in the specifics. The pose of the cat, the layout of the image, the overall color scheme, and everything else ‘macro’ about the image was fixed by step 8.

Let us now test by adding the concept ‘black’ to the cat. If we add this as a normal prompt the overall image composition will change. We get a nice image still, but the cat has moved. This is because the concept ‘black’ is not well isolated in our models embedding. And so, adding it into our prompt has moved our location in that high dimensional space, and resulted in a different output in terms of the overall look and feel of the cat.

![black cat image](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/1dcc052b-4309-41a7-3daf-c02f8ec84100/XLPortrait)

Instead, we can add our black into the prompt at a point after the start of the diffusion process.

```bash
a watercolor, a [black: 6] cat sitting in a flower garden, summer sun
```

And now we can see that our image is largely the same as our first one, only much of our cat’s fur has turned black. We’ve done this because we allowed the original image to take hold before swapping in the new concept at step 6 of the diffusion process.

![black cat delayed prompt](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/b2c49911-36f7-4de6-8836-ae5e653f6800/XLPortrait)

A big improvement! But it would be nice if we could get the cat to have a more uniform black coloration. As we can see from these examples, it’s not really possible to get our desired result right now. At stage 2 we introduce too much concept bleeding. And in stage 3 we are too late to get the full black fur we really want. The solution here is to increase the number of diffusion steps, and thus give ourselves more freedom to control the precise moment in which the new concept arises.

![black cat xyz](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/f2620748-3aee-4700-ddf9-6c0ab0270500/SDWide)

Instead of using a 20-step diffusion, let us increase it to a 50-step process. If we want to be precise, we can once again print out the diffusion steps, examine them, and determine a good point at which to start adding in the new concept. However, we can also guess a reasonable point to start. In this case, somewhere between steps 10 and 20 seems reasonable. We know from our first example, that by 1/5 of the way through the core composition is to be in place, and by 2/5 of the way, the core colouring is also done. So, we want to explore adding our new colour concept in between these two boundaries.

In this case, however, we find that the cat always has a mixed fur if we place the concept in far enough to elimiate the majority of concept bleeding. This tells us that the concept of blackness has some strong coupling in our model that has as powerful influence on the composition. For now, the results are good enough. But if we wanted to explore further we could try some other methods:

- Switching out the term black for a synonym (a jet cat / a noir cat / ...)
- Using more advanced solutions like IP Adaptor via Control Net to impose a specific style on the image.

I'll explore some of these ideas further in a future article.
