import React, { useState } from 'react'
import PostList from './components/PostList'
import './styles/App.css'
import PostForm from './components/PostForm'
import MySlelect from './components/UI/select/MySlelect'
import MyInput from './components/UI/input/MyInput'

function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: 'JavaScript', body: 'Descriptionдщкуь ' },
      { id: 2, title: 'C++', body: 'Descriptionпавапавпавп' },
      { id: 3, title: 'pyton', body: 'Descriptionывавыаываваыа ыв авыацкцкуцкцйкdsadsadasd' },
   ])

   const [selectedSort, setSelectedSort] = useState('')

   const createPost = (newPost) => {
      setPosts([...posts, newPost])
   }

   // Получаем из дочернего компонента
   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id))
   }

   const sortPosts = (sort) => {
      setSelectedSort(sort)
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
   }

   return (
      <div className='App'>
         <PostForm create={createPost} />
         <hr style={{ margin: '15px 0' }} />
         <div>
            <MyInput placeholder='поиск' />
            <hr style={{ margin: '15px 0' }} />
            <MySlelect
               value={selectedSort}
               onChange={sortPosts}
               defaultValue={'Выберите значение сортировки'}
               options={[
                  { value: 'title', name: 'По названию' },
                  { value: 'body', name: 'По описанию' },
               ]}
            />
         </div>
         {posts.length !== 0 ? <PostList posts={posts} title={'Список постов'} remove={removePost} /> : <h1 style={{ textAlign: 'center' }}>"Посты не были найдены"</h1>}
      </div>
   )
}

export default App
