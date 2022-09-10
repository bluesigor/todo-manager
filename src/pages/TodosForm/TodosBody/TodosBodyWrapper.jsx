import React from 'react'
import { Box } from '@mui/material'

import TodosListItem from './components/TodosListItem'
import Fallback from '../../../common/components/Fallback'

import { useTodosContext } from '../../../context/TodosContext'

const TodosBodyWrapper = () => {
  const { todosList } = useTodosContext()

  if (!todosList) {
    return <Fallback />
  }

  return (
    <Box
      sx={{
        mt: '40px',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: '1 0 100%',
        maxHeight: '100%',
        overflow: 'scroll !important',
        height: '30vh',
      }}
    >
      {todosList.map((todo) => {
        const { id, title, date, description, isComplete } = todo
        return (
          <TodosListItem
            todo={todo}
            id={id}
            key={id}
            date={date}
            description={description}
            title={title}
            isComplete={isComplete}
          />
        )
      })}
    </Box>
  )
}

export default TodosBodyWrapper
