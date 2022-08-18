import React, { useState } from 'react'
import PostItem from './components/PostItem'
import './styles/App.css'

function App() {
   const [value, setValue] = useState('Текст в инпуте ')

   return (
      <div className='App'>
         <PostItem />
      </div>
   )
}

export default App
