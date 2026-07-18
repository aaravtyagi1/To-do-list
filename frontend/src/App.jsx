
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import UserProfile from './pages/UserProfile'
import { UserDataContext } from './context/userContext'

const App = () => {
  const ans = useContext(UserDataContext)
  console.log(ans)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path  ='/signup' element={<UserSignup/>}/>
        <Route path  ='/login' element={<UserLogin/>}/>
        <Route path  ='/profile' element={<UserProfile/>}/>
      </Routes>
    </div>
  )
}

export default App