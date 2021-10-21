import React, { useState } from 'react'

import {
  TextInput,
  View
} from 'react-native'
import { COLORS } from '../../theme'

import { Button } from '../Button'
import { styles } from './styles'

export function SendMessageForm(){
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
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
      />
    </View>
  )
}