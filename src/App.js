import React, { useMemo, useState } from 'react'
import PostList from './components/PostList'
import './styles/App.css'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './components/hooks/usePost'

function App() {
   const [posts, setPosts] = useState([])

   const [filter, setFilter] = useState({ sort: '', query: '' }) // компонент передает состояние в дочерний компонент PostFilter
   const [modal, setModal] = useState(false)

   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

   const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
   }

   // Получаем из дочернего компонента
   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id))
   }

   return (
      <div className='App'>
         <MyButton onClick={() => setModal(true)} style={{ margin: '30px' }}>
            Создать пост
         </MyButton>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
         </MyModal>

         <hr style={{ margin: '15px 0' }} />
         <PostFilter filter={filter} setFilter={setFilter} />
         <PostList posts={sortedAndSearchedPosts} title={'Список постов'} remove={removePost} />
      </div>
   )
}

export default App
