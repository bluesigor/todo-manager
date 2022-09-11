import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

import { useUserSettingsContext } from '../../context/UserSettingsContext'
import Localize from './Localize'

const SwitchLocalization = () => {
  const { setLanguage, language } = useUserSettingsContext()

  const handleSwitchLanguage = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <FormControl size="small">
      <InputLabel>
        <Localize>Language</Localize>
      </InputLabel>
      <Select
        defaultValue="en"
        value={language}
        onChange={handleSwitchLanguage}
        label="Language"
      >
        <MenuItem value="uk">
          <Localize>Ukrainian</Localize>
        </MenuItem>
        <MenuItem value="en">
          <Localize>English</Localize>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default SwitchLocalization
