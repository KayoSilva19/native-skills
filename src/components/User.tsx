import { Text, View } from "react-native"
import { Avatar, AvatarFallback, AvatarImage } from './Avatar'

const photoImage = 'https://media.licdn.com/dms/image/D4D03AQG-e8YRPMARzQ/profile-displayphoto-shrink_200_200/0/1711845248646?e=1717632000&v=beta&t=k0iM7dl6AxHNUb2xXbi_nB8SZS96TQO25ktsNfVV0Y8'

export function User() {
  return (
    <View className="items-center">
      <Avatar className='w-32 h-32 border-4 border-gray-600'>
        <AvatarImage  source={{ uri: photoImage}} />
        <AvatarFallback>KS</AvatarFallback>
      </Avatar>
      <Text className='text-gray-700 dark:text-white font-bold text-2xl mt-4'>Kayo Silva</Text>
      <Text className='text-gray-500 dark:text-gray-400 text-md'>@okayosilva</Text>
    </View>
  )
}