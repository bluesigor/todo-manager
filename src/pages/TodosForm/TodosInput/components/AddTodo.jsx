import { Button } from '@mui/material'
import React from 'react'
import Localize from '../../../../common/components/Localize'

const AddTodo = () => {
  return (
    <Button
      color="success"
      type="submit"
      sx={{
        width: '200px',
        border: '1px solid lightgray',
      }}
    >
      <Localize>Add Task</Localize>
    </Button>
  )
}

export default AddTodo
