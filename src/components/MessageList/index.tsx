import React, { useState, useEffect } from 'react'
import { io } from "socket.io-client"

import { MESSAGES_EXAMPLE } from '../../utils/messages'

import {
  ScrollView
} from 'react-native'

import { styles } from './styles'
import { Message, MessageProps } from '../Message'
import { api } from '../../services/api'

const message = {
  id: '1',
  text: 'Mensagem de teste',
  user: {
    name: 'Luiz Oliveira',
    avatar_url: "https://github.com/luiizsilverio.png" 
  }
}

let messagesQueue: MessageProps[] = MESSAGES_EXAMPLE

const socket = io(String(api.defaults.baseURL))
socket.on("new_message", (message) => {
  messagesQueue.push(message)
})

export function MessageList(){
  const [messages, setMessages] = useState<MessageProps[]>([])

  useEffect(() => {
    async function fetchMessages() {
      const messageResponse = await api.get<MessageProps[]>('/messages/last3')
      setMessages(messageResponse.data)
    }

    fetchMessages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]])
        messagesQueue.shift() // remove o primeiro elemento
      }
    }, 3000)

    return (() => {
      clearInterval(timer)
    })
  }, [])

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {
        messages.map((message) => (
          <Message key={message.id} data={message} />
        ))
      }

    </ScrollView>
  )
}