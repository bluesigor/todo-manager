import React, { createContext, useContext, useReducer } from 'react'

import { todosInitialState, todosReducer } from '../store/todosReducer'

const TodosContext = createContext()

export const TodosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState)

  const todosValue = {
    ...state,

    addTodo: (value) => dispatch({ type: 'addTodo', payload: value }),

    setComplete: (id) => dispatch({ type: 'setComplete', payload: id }),

    removeTodo: (id) => dispatch({ type: 'removeTodo', payload: id }),

    removeAllTodos: () => dispatch({ type: 'removeAllTodos' }),

    updateTodo: (id, value) => dispatch({ type: 'updateTodo', id, value }),
  }

  return (
    <TodosContext.Provider value={todosValue}>{children}</TodosContext.Provider>
  )
}

export const useTodosContext = () => {
  return useContext(TodosContext)
}
