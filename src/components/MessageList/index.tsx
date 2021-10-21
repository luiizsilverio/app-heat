import React from 'react'

import {
  ScrollView
} from 'react-native'

import { styles } from './styles'
import { Message } from '../Message'

const message = {
  id: '1',
  text: 'Mensagem de teste',
  user: {
    name: 'Luiz Oliveira',
    avatar_url: "https://github.com/luiizsilverio.png" 
  }
}

export function MessageList(){
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  )
}