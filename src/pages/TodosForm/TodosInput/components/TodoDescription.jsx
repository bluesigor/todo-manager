import { Box, TextField } from '@mui/material'
import React from 'react'

const TodoDescription = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange((prev) => {
      return {
        ...prev,
        description: e.target.value,
      }
    })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
      }}
    >
      <TextField
        itemID={value}
        onChange={handleChange}
        value={value}
        rows={3}
        multiline
        fullWidth
        placeholder="description"
        id="fullWidth"
      />
    </Box>
  )
}

export default TodoDescription
