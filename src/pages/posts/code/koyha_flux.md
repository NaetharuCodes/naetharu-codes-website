---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Files for Flux Training in Kohya_SS"
pubDate: 10/06/2024
description: "Files for Flux training in Kohya_SS."
author: "James Bridge"
url: "flux-training-files"
tags: ["Flux", "Kohya", "Training"]
---

```bat
accelerate launch --mixed_precision bf16 --num_cpu_threads_per_process 1 flux_train_network.py --pretrained_model_name_or_path C://AI//ComfyUI_windows_portable_nvidia//ComfyUI_windows_portable//ComfyUI//models//unet//flux1-dev.safetensors --clip_l C://AI//ComfyUI_windows_portable_nvidia//ComfyUI_windows_portable//ComfyUI//models//clip//clip_l.safetensors --t5xxl C://AI//ComfyUI_windows_portable_nvidia//ComfyUI_windows_portable//ComfyUI//models//clip//t5xxl_fp8_e4m3fn.safetensors --ae C://AI//ComfyUI_windows_portable_nvidia//ComfyUI_windows_portable//ComfyUI//models//vae//ae.safetensors --cache_latents_to_disk --save_model_as safetensors --sdpa --persistent_data_loader_workers --max_data_loader_n_workers 2 --seed 42 --gradient_checkpointing --mixed_precision bf16 --save_precision bf16 --network_module networks.lora_flux --network_dim 16 --network_alpha 16 --optimizer_type adafactor --learning_rate 1e-3 --network_train_unet_only --cache_text_encoder_outputs --cache_text_encoder_outputs_to_disk --fp8_base --highvram --max_train_epochs 8 --save_every_n_epochs 2 --dataset_config dataset.toml --output_dir D://Models//Lora --output_name mkm4 --timestep_sampling sigmoid --model_prediction_type raw --guidance_scale 1.0 --loss_type l2 --optimizer_type adafactor --optimizer_args "relative_step=False" "scale_parameter=False" "warmup_init=False" --split_mode --network_args "train_blocks=single"

```

```toml
[general]
shuffle_caption = false
caption_extension = '.txt'
keep_tokens = 1

# This is a DreamBooth-style dataset
[[datasets]]
resolution = 512
batch_size = 1
keep_tokens = 1

  [[datasets.subsets]]
  image_dir = 'path of your dataset'
  class_tokens = 'lora name'
  num_repeats = 1

```