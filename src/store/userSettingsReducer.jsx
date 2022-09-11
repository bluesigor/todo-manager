export const userSettingsInitialState = {
  language: 'en',
}

export const userSettingsReducer = (state, action) => {
  switch (action.type) {
    case 'setLanguage':
      return {
        ...state,
        language: action.payload,
      }
    default:
      return state
  }
}
