// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD
// Author: Uri Shaked

export const presets = [
  {
    name: 'KianV uLinux Image (TT06)',
    baseUrl: 'https://urish.github.io/tt-kian-riscv-firmware/',
    files: [
      { offset: 1048576, name: 'bootloader.bin' },
      { offset: 1572864, name: 'kianv.dtb' },
      { offset: 2097152, name: 'Image' },
    ],
  },
];
