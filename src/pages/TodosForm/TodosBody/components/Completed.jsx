import { Button } from '@mui/material'
import React from 'react'
import Localize from '../../../../common/components/Localize'
import { useTodosContext } from '../../../../context/TodosContext'

const Completed = ({ id, isComplete }) => {
  const { setComplete, todosList } = useTodosContext()

  const handleComplete = () => {
    const tempTodo = todosList.find((todo) => todo.id === id)

    if (tempTodo) {
      setComplete(tempTodo.id)
    }
  }

  return (
    <Button variant="outlined" onClick={handleComplete}>
      <Localize>Mark as Completed</Localize>
    </Button>
  )
}

export default Completed
