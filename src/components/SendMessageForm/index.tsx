import React, { useState } from 'react'

import {
  Alert,
  Keyboard,
  TextInput,
  View
} from 'react-native'

import { api } from '../../services/api'
import { COLORS } from '../../theme'
import { Button } from '../Button'
import { styles } from './styles'

export function SendMessageForm(){
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  async function handleMessageSubmit() {
    const messageFormatted = message.trim()
    
    if(messageFormatted.length > 0) {
      setSending(true)      

      await api.post('/messages', { message: messageFormatted })

      setMessage('')
      Keyboard.dismiss(); //fecha o teclado
      setSending(false)
      Alert.alert('Mensagem enviada!')

    } else {
      Alert.alert('Escreva a mensagem para enviar.')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        autoCorrect={false}
        autoCompleteType="off"
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sending}
      />

      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sending}
        onPress={handleMessageSubmit}
      />
    </View>
  )
}