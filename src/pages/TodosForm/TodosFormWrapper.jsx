import React from 'react'
import { Box, Paper } from '@mui/material'

import TodosBodyWrapper from './TodosBody/TodosBodyWrapper'
import TodosInput from './TodosInput/TodosInput'
import FormHeader from './TodosInput/components/FormHeader'
import RemoveTodosPoper from './TodosInput/components/RemoveTodosPoper'

import { TodosContextProvider } from '../../context/TodosContext'

const TodosFormWrapper = () => {
  return (
    <TodosContextProvider>
      <Paper
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          width="1100px"
          maxWidth="100%"
          p={{ xs: 1, sm: 2 }}
          sx={{
            border: '2px solid black',
            borderRadius: '8px',
            boxShadow: '5px 2px 10px 5px rgba(0,0,0,0.75)',
          }}
        >
          <FormHeader />
          <TodosInput />
          <TodosBodyWrapper />
          <RemoveTodosPoper />
        </Box>
      </Paper>
    </TodosContextProvider>
  )
}

export default TodosFormWrapper
