import React, { useRef, useState } from 'react'
import PostList from './components/PostList'
import './styles/App.css'

import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: 'JavaScript', body: 'Description' },
      { id: 2, title: 'Java', body: 'Description' },
      { id: 3, title: 'pyton', body: 'Description' },
   ])
   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')

   const addNewEvent = (e) => {
      e.preventDefault()
      const newPost = {
         id: Date.now(),
         title,
         body,
      }
      setPosts([...posts, newPost])
      setTitle('')
      setBody('')
   }

   return (
      <div className='App'>
         <form>
            <MyInput type='text' placeholder='Название поста' onChange={(e) => setTitle(e.target.value)} value={title} />
            <MyInput type='text' placeholder='Описанние поста' onChange={(e) => setBody(e.target.value)} value={body} />
            <MyButton onClick={addNewEvent}> Создать пост</MyButton>
         </form>
         <PostList posts={posts} title={'Список постов'} />
      </div>
   )
}

export default App
