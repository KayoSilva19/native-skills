import { useContext, useState } from "react"

import { View } from "react-native"
import { Title } from "@/components/Title"

import { Option } from "@/components/Option"
import { Switch } from "@/components/Switch"
import { Checkbox } from "@/components/Checkbox"

import { ThemeContext } from '@/Provider/ThemeProvider'

export function Preferences() {
  const [isEnabled, setIsEnable] = useState(true)
  const { toggleTheme } = useContext(ThemeContext)

  function alternateTheme() {
    toggleTheme()
    setIsEnable(!isEnabled)
  }

  return (
    <View className="w-full">
      <Title>Preferences</Title>

      <Option>
        <Option.Icon icon='dark-mode' />
        <Option.Title>Dark mode</Option.Title>
        <Switch onValueChange={alternateTheme} value={isEnabled}/>
      </Option>

      <Option>
        <Option.Icon icon='email' />
        <Option.Title>Public email</Option.Title>
        <Checkbox />
      </Option>
    </View>   
  )
}