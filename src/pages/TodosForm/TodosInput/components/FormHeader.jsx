import { Stack, Typography } from '@mui/material'
import React from 'react'
import Localize from '../../../../common/components/Localize'

import SwitchLocalization from '../../../../common/components/SwitchLocalization'

const FormHeader = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography p={2} m={1} component="h3" variant="h4">
        <Localize>Your Task Manager</Localize>
      </Typography>
      <SwitchLocalization />
    </Stack>
  )
}

export default FormHeader
