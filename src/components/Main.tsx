// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD
// Author: Uri Shaked

import { Button, Paper, Stack, Typography } from '@suid/material';
import { TTBoardDevice } from '~/ttcontrol/TTBoardDevice';
import { DebugLogs } from './DebugLogs';
import { FlashPanel } from './Flasher';

export interface IMainProps {
  device: TTBoardDevice;
}

export function Main(props: IMainProps) {
  const disconnect = () => {
    props.device.close();
  };

  return (
    <Stack mt={2}>
      <Stack direction="row" spacing={1} marginBottom={2} alignItems="center">
        <Stack flex={1} marginRight={1}>
          <Typography>
            Firmware: <strong>{props.device.data.version ?? '<unknown>'}</strong>
          </Typography>
          <Typography>
            Flash ID: <code>{props.device.data.flashId ?? 'not detected'}</code>
          </Typography>
        </Stack>
        <Button onClick={disconnect} variant="outlined">
          Disconnect
        </Button>
      </Stack>

      <Paper sx={{ padding: 1 }}>
        <FlashPanel device={props.device} />
      </Paper>

      <DebugLogs logs={props.device.data.logs} />
    </Stack>
  );
}
