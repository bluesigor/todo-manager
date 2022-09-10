import React, { useEffect, useState } from 'react'
import translate from 'translate'
import { useUserSettingsContext } from '../../context/UserSettingsContext'

translate.engine = 'google'
translate.key = process.env.GOOGLE_KEY

const Localize = (props) => {
  const [textInput, setTextInput] = useState(props.children)
  const { language } = useUserSettingsContext()

  useEffect(() => {
    const TranslateText = async () => {
      const res = await translate(props.children, language)
      setTextInput(res)
    }

    TranslateText()
  }, [props.children, language])

  return <>{textInput}</>
}

export default Localize
