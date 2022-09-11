import storeData from '../service/getLocalStorage'

export const todosInitialState = {
  todo: {
    title: '',
    description: '',
    id: '',
    date: '',
    isComplete: false,
  },
  todosList: storeData,
}

export const todosReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todo: {
          ...state.todo,
          ...action.payload,
        },
        todosList: [action.payload, ...state.todosList],
      }
    case 'setComplete':
      return {
        ...state,
        todosList: state.todosList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo,
        ),
      }
    case 'removeTodo':
      return {
        ...state,
        todosList: state.todosList.filter((todo) => todo.id !== action.payload),
      }
    case 'removeAllTodos':
      return {
        ...state,
        todosList: [],
      }
    case 'updateTodo':
      return {
        ...state,
        todosList: state.todosList.map((todo) =>
          todo.id === action.id ? action.value : todo,
        ),
      }
    default:
      return state
  }
}
