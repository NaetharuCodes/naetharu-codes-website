---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Download and Setup Automatic 1111"
pubDate: 29/05/2024
description: "Download and Setup Automatic 1111."
author: "James Bridge"
url: "download-and-setup-automatic1111"
tags: ["AI Art", "Stable Diffusion", "Automatic 1111", "Tutorial", "Newcomer"]
---

Automatic 1111 is one of the most popular local implementations of Stable Diffusion. The others being Forge, and ComfyUI. I would generally recommend most new users start with Automatic 1111 because:

- The interface is easier to understand.
- Getting support is easier thanks to the wide install base.
- There are a large number of powerful extensions that help with workflows.

## Pre-Request: Installing GIT

The following guide assumes that you are running Windows 10 or 11. If you are using MacOS or Linux you will need to consult the Automatic 1111 Git Repo for specific OS instructions.

Step one is to download and install Git. This is a version control software that we will be using to ensure that we keep Automatic 1111 up to date. You can download git from the official site here: [Git link](https://git-scm.com/download/win). You will want to choose the 64-bit Git for Windows Setup.

When installing git you can choose all of the default options. Once installed you can confirm that everything has worked by opening a new command prompt (press the windows key, and then type 'cmd' and press enter) - and use the following command:

```bash
git --version
```

If the installation was successful you should see some information on the specific versoin of git that has been installed. If you get an error message saying that the command is not recognised, something has gone wrong, and further trouble shooting may be needed.

## Pre-Request: Installing Python

Python is the programming language needed to run Stable Diffusion. You will need to have this installed before you can run Automatic 1111. The current version needed at the time of writing is Python 3.10.6. However, this is subject to change and I strongly advise that you confirm this by checking the instructions in the Automatic 1111 Github Repo before proceeding.

You can download the correct version of Python from [Python Official Downloads](https://www.python.org/downloads/release/python-3106/). Scroll to the bottom of the page, and choose the Windows Installer (64-bit) versoin. Once downloaded, run and leave all the settings at their default values.

Once again, we can confirm that the installation has been successful by opening a new command prompt (windows key, type "cmd" and press enter) and typing in:

```bash
py --version
```

We should see the specific version of python we have installed.

If you already have another version of python installed, then you may not see the new version. For this specific case, you will need to edit the Automatic 1111 install script with a direct path to your correct python version. See the apendix to this article for a link to this script and instructions on how to edit the path.

## Installing Automatic 1111

Now that you have the pre-requests set up, you are ready to download and install Automatic 1111. Visit [the official Automatic 1111 Github page](https://github.com/AUTOMATIC1111/stable-diffusion-webui), and at the top of the page click on the green 'code' button, and then choose HTTPS. Use the copy button to grab the URL. Now, choose where on your machine to install the software. I would recommend a folder specific to your AI apps, at the root level of one of your drives. Mine is C:\AIAPPS. Open this folder in windows. Place your cursor in the windows explorer address bar inside that folder, and type 'cmd' and press enter. This will open a new command prompt set to the chosen folder's location.

In the new prompt type:

```bash
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

This will copy the code from the Automatic 1111 repo onto your local computer.

Now go into the newly created folder, and find the file called webui.bat. Double click this and it will open a command prompt window, and the application will install. This will take some time. It has to download all of the libraries needed to run Stable Diffusion, which are quite large. It is normal for it to take around 30-minutes on an average speed broadband connection. It might be a little longer in some case.

Once the application is ready you will see it says:

```bash
Running on local URL:  http://127.0.0.1:7860
```

This address - http://127.0.0.1:7860 - is a locally hosted web-address on your own machine. While it runs inside the browser, it is not an internet service, and is simply using the browser as a conveniet user-interface. You can click on the link, and it will open the web-ui.

Congratulations. You have installed Automatic 1111.

## Test the install

Before going further you should run a test image generation to confirm that everything is working. Simply add some text to the top box labelled "Prompt" and press the orange 'Generate" button to create you first image. Depending on how powerful your graphics card is, this could take anywhere from a second to several minutes. The results will probably look bad: don't worry - we will address how to get good looking images in a later article. For now, we only care that we are getting something.

### Appendix

#### Cuda Drivers

Nvidia offers their CUDA toolkit that makes AI based tasks run faster. Once you have the basic Automatic 1111 install working, you should install the latest CUDA drivers. [You can download them from here](https://developer.nvidia.com/cuda-downloads?target_os=Windows&target_arch=x86_64&target_version=11&target_type=exe_local). Note that these only work for RTX branded cards from the 2000, 3000, and 4000 series (as well as professional RTX and A series cards). If you are working on an older card from the GTX line you will not be able to make use of the CUDA drivers.

#### Enabling XFormers

By default XFormers are turned off in Automatic 1111. Enabling them will improve performance provided you have a compatible card RTX based card. Doing this is as simple as adding one line to the launch script. Inside the Automatic 1111 folder, right click and create a new file. Name the file run.bat (make sure it is .bat and has a type of Windows Batch File). Then in the file type the following:

```bash
./webui.bat --xformers
```

To make it easier to run Automatic 1111 we can add a shortcut to this to our desktop. Right click the new batch file and choose "create shortcut". Then take the newly made shortcut and drag it onto your desktop. It's not a true executable so you won't be able to pin it to a task bar. You can also switch the icon to something more visually pleasing and easy to recognise by right clicking the file, going into properties, and then choosing "Change Icon". If you want to be really funky you can download a custom set of icons for your AI Apps. Deviant Art has some excellent options that are free to use for non-commercial purposes.

Now, when you run your app from this new file, the XFormers option will be enabled, which will make a noticable difference to the speed and performance of your app.

#### Windows 1111 Graphics Settings

Finally, in Windows 11 you can go into your graphics settings, and toggle off the Hardware-Accelerated GPU Scheduling. This also makes a noticable difference to the Stable Diffusion performance. However, do note that it may also have a negative impact on video game performance. An OS restart is needed for this change to take effect.
