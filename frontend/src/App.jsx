import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Authentication from './pages/Authentication/Authentication'

import { CommentProvider } from './CommentsContext'
import { AuthProvider } from './AuthContext'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <CommentProvider>
          
            <Routes>
              <Route path='/intro' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/' element={<Authentication />} />
            </Routes>
          
        </CommentProvider>
      </AuthProvider>
    </div>
  )
}

export default App