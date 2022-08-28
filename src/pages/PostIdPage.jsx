import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../components/hooks/useFetching'
import Loader from '../components/UI/Loader/Loader'

const PostIdPage = () => {
   const params = useParams()
   const [post, setPost] = useState({})
   const [comments, setComments] = useState([])

   const [fetchingPostId, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(id)
      setPost(response.data)
   })
   const [fetchingComments, isCommentsLoading, errorComments] = useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id)
      setComments(response.data)
   })

   useEffect(() => {
      fetchingPostId(params.id)
      fetchingComments(params.id)
   }, [])

   return (
      <div>
         <h1>Вы открыли пост c ID={params.id}</h1>
         {isLoading ? (
            <Loader />
         ) : (
            <div>
               {post.id}.{post.title}
            </div>
         )}
         <h1 style={{ margin: '20px' }}>коментарии к постам</h1>
         {isCommentsLoading ? (
            <Loader />
         ) : (
            <div>
               {comments.map((comm) => (
                  <div style={{ marginTop: '15px' }}>
                     <h5>{comm.email}</h5>
                     <div>{comm.body}</div>
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}

export default PostIdPage
