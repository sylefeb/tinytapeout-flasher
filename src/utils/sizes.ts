// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD
// Author: Uri Shaked

export const KB = 1024;
export const MB = KB * KB;

export function toKB(value: number) {
  if (value < 10 * KB) {
    return (value / KB).toFixed(1);
  }
  return (value / KB).toFixed(0);
}
