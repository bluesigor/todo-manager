import React from 'react'
import { TextField } from '@mui/material'

const TodoTitle = ({ onChange, value, error }) => {
  const handleChange = (e) => {
    onChange((prev) => {
      return {
        ...prev,
        title: e.target.value,
      }
    })
  }

  return (
    <TextField
      itemID={value}
      error={error}
      helperText={error && 'Please provide title'}
      onChange={handleChange}
      value={value}
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

export default TodoTitle
