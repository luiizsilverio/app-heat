import React from 'react'

import {
  View, 
  Text
} from 'react-native'

import { UserAvatar } from '../UserAvatar'
import { styles } from './styles'

export type MessageProps = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

type Props = {
  data: MessageProps
}

export function Message({ data }: Props){
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {data.text}
      </Text>

      <View style={styles.footer}>
        <UserAvatar
          imageUri={data.user.avatar_url}
          size="SMALL" 
        />

        <Text style={styles.userName}>
          {data.user.name}
        </Text>
      </View>
    </View>
  )
}