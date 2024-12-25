// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD
// Author: Uri Shaked

import { AppBar, Box, IconButton, Toolbar, Typography } from '@suid/material';
import { repo } from '~/config/consts';
import { GitHubIcon } from './GitHubIcon';

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Tiny Tapeout Flasher
        </Typography>
        <Box flexGrow={1} />
        <IconButton
          color="inherit"
          component="a"
          href={repo}
          target="_blank"
          title="GitHub repository"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
