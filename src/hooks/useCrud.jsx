import { useTodosContext } from '../context/TodosContext'

const useCrud = () => {
  const { removeTodo, todosList, removeAllTodos } = useTodosContext()

  const handleRemoveTodo = (id) => {
    const tempTodo = todosList.find((todo) => todo.id === id)

    if (tempTodo) {
      removeTodo(tempTodo.id)
    }
  }

  const removeAll = () => {
    removeAllTodos()
  }

  return { handleRemoveTodo, removeAll }
}

export default useCrud
