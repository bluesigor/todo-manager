import { createContext, useContext, useReducer } from 'react'
import {
  userSettingsInitialState,
  userSettingsReducer,
} from '../store/userSettingsReducer'

const UserSettingsContext = createContext()

export const UserSettingsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    userSettingsReducer,
    userSettingsInitialState,
  )

  const userSettingValue = {
    language: state.language,

    setLanguage: (value) => dispatch({ type: 'setLanguage', payload: value }),
  }

  return (
    <UserSettingsContext.Provider value={userSettingValue}>
      {children}
    </UserSettingsContext.Provider>
  )
}

export const useUserSettingsContext = () => {
  return useContext(UserSettingsContext)
}
