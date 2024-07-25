---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Getting Good Images"
pubDate: 29/05/2024
description: "A breakdown of the core methods to get good Stable Diffusion results."
author: "James Bridge"
url: "getting-good-images"
tags:
  [
    "AI Art",
    "Stable Diffusion",
    "Automatic 1111",
    "Tutorial",
    "Newcomer",
    "Prompt Engineering",
  ]
---

Starting out in Stable Diffusion can be daunting. In this guide I’ll walk you through many of the basic settings in Automatic 1111, and help you develop a sense of how to get some good quality images.

## Custom Models

The most important thing is to choose your model. Stable Diffusion has two core models on offer: 1.5 which is the original public release, and SDXL which is a newer model capable of more detailed images. Which you choose will depend on a range of factors, and many of the more advanced workflows may switch between both types at different stages of the image creation process.

You can use the standard versions of these models. The basic 1.5 model comes included in Automatic 1111, and SDXL can be downloaded. However, these basic models are not great. Almost everyone that uses Stable Diffusion does so with one or more fine-tuned custom models.

In a later article we will look into how we can create custom models of our own using tools like Dreambooth and KoyahSS. However, for the moment we are going to download and use a model trained by someone else. There are two main resources online where we can download these models from:

#### WARNING: While CivitAI is an excellent resource, please note that it also contains a lot of NSFW content. While this can be filtered out, please do keep this in mind when visiting.

- [HuggingFace](https://huggingface.co/)
- [CivitAI](https://civitai.com/)

## Choosing Our Models

There are many different models to choose from. Some are general purpose, and others have been specifically trained on certain themes or styles. For now I recommend that you download the following two models:

- [ZavyChromaXL version 7](https://civitai.com/models/119229?modelVersionId=490254)
- [CyberRealistic version 4.2](https://civitai.com/models/15003/cyberrealistic)

ZavyChroma is a SDXL model that has been trained to give a range of image styles from cinematic to artistic. It's not the best realism model, but for more artistic applications it's hard to beat. CyberRealistic is one of the most popular SD 1.5 options, and excels at cinematic images along with some more artistic applications.

Download these two models. This may take a while as they are quite large. SDXL models are generally around 6GB, while SD1.5 models tend to be a little smaller at around 3GB each. Once these have downloaded, you will need to add them to your models folder. You can find this located at:

```bash
\stable-diffusion-webui\models\Stable-diffusion
```

Once you place the new models inside the folder, you will be able to load them inside Automatic 1111. To do this, simply click the blue swirl icon at the very top of the screen next to the Stable Diffusion Checkpoint box. And then open the dropdown menu and the new models should be showing. To start with choose CyberRealistic.

#### ASIDE: Models (also called Checkpoints) come in a few different file-formats. The best choice is always SafeTensor. This is a special format that does not contain executable code. And so as the name suggests, these models are safe to download and use. Other formats will work, but be ware that they could contain malicious code and should be treated with due caution. Especially if you plan to run them locally on your own hardware.

## Generating SD 1.5 Images

With CyberRealistic version 4.2 loaded, we are going to start with the following positive prompt:

```
a man wearing a tuxedo
```

Let's generate our first image. We should get something that looks like this:
![SD 1.5 image of man in a tux](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/09678fd7-a5d9-4754-ac9a-b88c01053500/XLSquare)

Your specific image will be different, as the image we get depends on the seed that is randomly chosen. However, you should see something similar. It's fine, but hardly an impressive image. Let's take a moment to see if we can improve it.

First, we tend to get better results if we work with slightly larger images. The default size for SD 1.5 is 512 x 512. But we can raise this up to 768 x 768 without issue. We can also switch it to landscape or portait format using either 512 x 768, or 768 x 512 respectively. We make the change by either typing in the new sizes to the number boxes or moving the sliders marked Width and Height.

Before we make any more images, we should also adjust the Batch Count. This tells Automatic 1111 how many images to create. It's generally a good idea to make around four images at a time. It is difficult to see how effecitive a prompt is from a single image, as we need to spot patterns in our generations. By creating four images (or more) per run, we can view them all and identify common features that we either like or wish to elimiate, which makes further prompt refinement easier.

For now, let's set our size to 512 wide, and 768 high since a portrait orientation makes sense for a picture of a person. And the batch count to four (4) images. Press create a again, and see what we get.

![Grid of four men in tuxs](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/5b6af2fe-b44b-476a-a84d-d46196194d00/XLSquare)

Right away, we are getting better simply thanks to the extra resolution, and the better format. We can even try to bump up the size further. While SD 1.5 is technically limited to 768 pixels in any dimension, my testing shows that good results can be had up to a size of 768 x 1024. You will find more errors in some images of this size. The AI model is not able to observe the whole image at once at this size, and so it can sometimes get lost and create duplicate elements, or tile parts of the image. But these occurances are infrequent enough to warrant using some SD 1.5 models at this higher resolution provided your GPU is fast enough.

## Adding More Detail

Now we have a basic prompt we can start to add some more detail to it. There is no hard and fast rule. But there are some solid guide lines that will make for a good starting place. I would recommend you use the following format:

```bash
[image style] [image subject] [specific details]
```

To give some examples we might try:

```bash
cinematic photograph, a man wearing a tuxedo, blond hair
```

```bash
oil painting, a man wearing a tuxedo, green shirt
```

```bash
cartoon, a man wearing a tuxedo, crosshatching
```

Trying these prompts out you can see we get some really interesting results. The first one seems to give us a similar image to before, but with a bit more style to it.

![cinematic photo of a man in a tux](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/9fec798d-6dcc-45c1-6049-950133416100/XLPortrait)

The second one gives us a nice traditional painting look. However we also seem to have introduced an actual oil painting into the image, which is NOT what we wanted.

![oil painting photo of a man in a tux](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/9b2819f2-0f5b-4462-3659-edaaa7498d00/XLPortrait)

And our third one we have a nice cartoon man, with noticable crosshatching in the image.

![oil painting photo of a man in a tux](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/608af31d-0570-4b87-dc5a-4bfd9f21cc00/XLPortrait)

In all I think these are a sizable improvement from our original small image. They are more interesting, and are moving in the direction of being usable. But they do have some flaws that we would need to iron our further. This is where negative prompts can help a great deal. Let's revisit our oil painting example. The painterly style is good, and captures what we were asking for. But we don't want an oil painting in the image. We want an image in the style of an oil painting. To address this we have two obvious routes.

- Adjust the positive prompt to more explicitly ask for a style
- Add a negative prompt to avoid getting an actual oil painting object in the image.

The simplest method here would be to state what we don't want. We can't add oil painting to the negative as that will direclty contradict our positive prompt. But we can add things like 'canvas' and 'frame'. If we do this, and re-create our images, we find that the chances of them having an actual oil painting object in the background deminish. Note that this does not mean we will never see one. Prompting in Stable Diffusion is not as simple as getting perfeclty what you ask for. We could no doubt improve on this by further experimentation. In a later article I'll run through using an XYZ grid to help with this kind of refinement. But for now, this enough to get us some good images.

## SDXL

Next, let's swap over to SDXL with the ZavyChromaXL model we downloaded.

SDXL is in effect Stable Diffusion version 2 (technically there is a version 2 as well, but nobody uses it. SDXL is the proper successor to version 1.5). It brings a number of benefits to the table. The overall image quality is much better. The range of concepts it can handle is far greater. And it has a much better grasp of different styles. Generally I would always work in SDXL unless there was very good reason to do otherwise.

SDXL images are best made at one of the following resolutions:

- 1024 x 1024
- 800 x 1200
- 1200 x 800

As with SD 1.5 I prefer to work in the portrait / landscape aspect ratios. They tend to give better images with nicer compositional elements.

Load up our new model, set the resolution to the new portrait sizing, and re-run our prompts.

![SDXL Tux Man](https://imagedelivery.net/eg6Xqa-jIrYvZBm8oCXnhg/24d5a35a-7d20-43d5-2195-3abe61f73400/XLPortrait)

Right away, we can see the vast improvement from the 1.5 model. The image quality is much better. The artistic content of the images is far more convicing. The model has a good grasp of brushwork, lighting, form.

### Appendix

#### WARNING: Stable Diffusion is an uncensored AI. Be careful and sensible about what you prompt for. If in doubt, include some negative prompts for things you DONT want to have the AI create. This is especially important in cases where the image generation content might contain NSFW results.
