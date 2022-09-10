import { UserSettingsContextProvider } from './context/UserSettingsContext'
import TodosFormWrapper from './pages/TodosForm/TodosFormWrapper'

function App() {
  return (
    <div className="App">
      <UserSettingsContextProvider>
        <TodosFormWrapper />
      </UserSettingsContextProvider>
    </div>
  )
}

export default App
