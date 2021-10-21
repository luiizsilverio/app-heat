import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from "../services/api"

const CLIENT_ID = '484d6dc274443192a649';
const SCOPE = 'read:user';
const USER_STORAGE = '@appheat:user';
const TOKEN_STORAGE = '@appheat:token';
    
type User = {
  id: string
  avatar_url: string
  name: string
  login: string
}

type AuthContextData = {
  user: User | null
  isSigning: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthResponse = {
  token: string
  user: User
}

type AuthorizationResponse = {
  params: {
    code?: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [isSigning, setIsSigning] = useState(true);
  const [user, setUser] = useState<User | null>(null)

  async function signIn() {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}` //&scope=${SCOPE}
    
    try {
      setIsSigning(true)
      const { params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse
      
      if (params && params.code) {
        const authResponse = await api.post('/authenticate', { code: params.code })
        const { user, token } = authResponse.data as AuthResponse
        
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
        await AsyncStorage.setItem(TOKEN_STORAGE, token)

        setUser(user)
      }

    } catch (error) {
      console.log(error)

    } finally {
      setIsSigning(false)
    }    
  }

  async function signOut() {
    setUser(null);
    await AsyncStorage.removeItem(USER_STORAGE)
    await AsyncStorage.removeItem(TOKEN_STORAGE)
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const user = await AsyncStorage.getItem(USER_STORAGE)
      const token = await AsyncStorage.getItem(TOKEN_STORAGE)

      if (user && token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setUser(JSON.parse(user))
      }

      setIsSigning(false)
    }

    loadUserStorageData()
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user,
      isSigning
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context 
}

export {
  AuthProvider,
  useAuth
}
