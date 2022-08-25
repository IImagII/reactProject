import React, { useEffect, useState } from 'react'
import PostList from './components/PostList'
import './styles/App.css'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './components/hooks/usePost'
import PostService from './API/PostService'
import Loader from './components/UI/Loader/Loader'
import { useFetching } from './components/hooks/useFetching'
import { getPageCount } from './utils/pages'

function App() {
   const [posts, setPosts] = useState([])

   const [filter, setFilter] = useState({ sort: '', query: '' }) // компонент передает состояние в дочерний компонент PostFilter
   const [modal, setModal] = useState(false)
   const [totalPage, setTotalPage] = useState(0)
   const [limit, setLimit] = useState(10)
   const [page, setPage] = useState(1)
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

   const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
      const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPage(getPageCount(totalCount, limit))
   })

   const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
   }

   useEffect(() => {
      fetchPost()
   }, [])

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
         {postError && <h1>Произошла ошибка ${postError}</h1>}
         {isPostsLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
               <Loader />
            </div>
         ) : (
            <PostList posts={sortedAndSearchedPosts} title={'Список постов'} remove={removePost} />
         )}
      </div>
   )
}

export default App
