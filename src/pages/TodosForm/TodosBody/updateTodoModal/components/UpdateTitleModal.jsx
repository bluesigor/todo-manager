import { TextField } from '@mui/material'
import React from 'react'

const UpdateTitleModal = ({ setUpdateData, title, error }) => {
  const handleChange = (e) => {
    setUpdateData((prev) => {
      return {
        ...prev,
        title: e.target.value,
      }
    })
  }

  return (
    <TextField
      itemID={title}
      error={error}
      helperText={error && 'Please provide title'}
      onChange={handleChange}
      value={title}
      placeholder="Please provide task title"
      sx={{
        border: '2px solid inherit',
        borderRadius: '8px',
      }}
      fullWidth
      id="fullWidth"
    />
  )
}

export default UpdateTitleModal
