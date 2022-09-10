import { Box, TextField } from '@mui/material'
import React from 'react'

const UpdateDescriptionModal = ({ description, setUpdateData }) => {
  const handleChange = (e) => {
    setUpdateData((prev) => {
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
        itemID={description}
        onChange={handleChange}
        value={description}
        rows={5}
        sx={{
          marginTop: '20px',
        }}
        multiline
        fullWidth
        placeholder="description"
        id="fullWidth"
      />
    </Box>
  )
}

export default UpdateDescriptionModal
