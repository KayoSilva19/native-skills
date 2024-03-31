import { ReactNode, useContext } from "react"
import { View, TextProps, Text } from "react-native"

import { colors } from '@/styles/colors'

import { MaterialIcons } from '@expo/vector-icons'
import { ThemeContext } from "@/Provider/ThemeProvider"

interface OptionProps {
  children: ReactNode
}

interface OptionIconProps{
  icon: keyof typeof MaterialIcons.glyphMap
}

function Option({ children }: OptionProps) {
  return (
    <View className="w-full flex-row items-center gap-2 border-b border-gray-300 dark:border-gray-500 py-3">
      {children}
    </View>
  )
}

function Icon({ icon }: OptionIconProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <MaterialIcons  
      name={icon}  
      size={20} 
      color={theme === 'light' ? 
            colors.gray[400] 
            : colors.white
          } 
    />
  )
}

function Title(rest : TextProps) {
  return (
    <Text className="text-gray-400 dark:text-white text-lg flex-1"
      {...rest}
    />
  )
}

Option.Title = Title
Option.Icon = Icon

export { Option }