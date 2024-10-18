import { useState } from 'react'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Compnents/Login'
import Profile from './Compnents/Profile'

function App() {


  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider >
  )
}

export default App
