# SPDX-License-Identifier: Apache-2.0
# Copyright (C) 2024, Tiny Tapeout LTD

import os
import sys


def report(dict_or_key: dict, val: str = None):
    if val is not None and not isinstance(dict_or_key, dict):
        dict_or_key = {dict_or_key: val}

    strs = list(map(lambda x: f"{x[0]}={x[1]}", dict_or_key.items()))
    print("\n".join(strs))


print()
report("sys.version", sys.version.split(";")[1].strip())
try:
    sdk_version = next(filter(lambda f: f.startswith("release_v"), os.listdir("/")))
except:
    sdk_version = "unknown"
report("tt.sdk_version", sdk_version)
