import React, { useState, useEffect } from 'react'
import { Stack } from '@mui/system'

import { useTodosContext } from '../../../context/TodosContext'
import getTime from '../../../helpers/date'
import { validateTodo } from '../../../helpers/validationTodo'
import TodoTitle from './components/TodoTitle'
import TodoDescription from './components/TodoDescription'
import AddTodo from './components/AddTodo'

const TodosInput = () => {
  const [todoItem, setTodoItem] = useState({
    title: '',
    description: '',
    date: '',
    id: '',
    isComplete: false,
  })
  const [error, setError] = useState(false)
  const { addTodo, todosList } = useTodosContext()

  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(todosList))
  }, [todosList])

  const handleSubmit = (e) => {
    e.preventDefault()

    const dateTime = getTime()
    const isValid = validateTodo(todoItem)

    if (!isValid) {
      setError(true)
    }

    if (isValid) {
      addTodo({
        title: todoItem.title,
        description: todoItem.description,
        id: Math.random().toString(36).substr(2, 9),
        date: dateTime,
        isComplete: false,
      })
      setError(false)
    }

    setTodoItem({
      title: '',
      description: '',
      date: '',
      id: '',
      isComplete: false,
    })
  }

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      direction="column"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="30vh"
    >
      <TodoTitle error={error} value={todoItem.title} onChange={setTodoItem} />
      <TodoDescription value={todoItem.description} onChange={setTodoItem} />
      <AddTodo />
    </Stack>
  )
}

export default TodosInput
