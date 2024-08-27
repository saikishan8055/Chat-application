import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter ,Route,Routes,Navigate} from 'react-router-dom'
import Auth from './Pages/auth'
import Chat from './Pages/chat'
import Profile from './Pages/profile'

function App() {
  return (
    
<div>
<BrowserRouter>
   <Routes>
    <Route path='/auth' element={<Auth/>} />
    <Route path='*' element={<Navigate to="/auth"/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/profile' element={<Profile/>}/>
    </Routes></BrowserRouter>

</div>

  )
}

export default App