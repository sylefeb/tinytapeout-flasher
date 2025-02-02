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
  {
    name: 'Run Length Encoded Bad Apple Video (TT07)',
    baseUrl: 'https://tt.rebel-lion.uk/',
    files: [{ offset: 0, name: 'tt07-badapple640x480.bin' }],
  },
  {
    name: 'Explorer terrain data (TT07)',
    baseUrl: 'https://sylefeb.github.io/tt07-explorer/',
    files: [{ offset: 0, name: 'tt07-explorer.data' }],
    qspiAfter: 1,
  },
];
