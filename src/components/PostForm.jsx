import React, { useState } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'

const PostForm = ({ create }) => {
   const [post, setPost] = useState({ title: '', body: '' })

   const addNewEvent = (e) => {
      e.preventDefault()
      const newPost = { ...post, id: Date.now() }
      create(newPost)
      setPost({ title: '', body: '' })
   }
   return (
      <form>
         <MyInput type='text' placeholder='Название поста' onChange={(e) => setPost({ ...post, title: e.target.value })} value={post.title} />
         <MyInput type='text' placeholder='Описанние поста' onChange={(e) => setPost({ ...post, body: e.target.value })} value={post.body} />
         <MyButton onClick={addNewEvent}> Создать пост</MyButton>
      </form>
   )
}

export default PostForm
