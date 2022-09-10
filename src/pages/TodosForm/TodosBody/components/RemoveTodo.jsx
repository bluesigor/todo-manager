import React from 'react'
import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

import useCrud from '../../../../hooks/useCrud'

const RemoveTodo = ({ id }) => {
  const { handleRemoveTodo } = useCrud()

  return (
    <IconButton onClick={() => handleRemoveTodo(id)} aria-label="delete">
      <Delete />
    </IconButton>
  )
}

export default RemoveTodo
