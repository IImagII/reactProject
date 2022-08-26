import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../components/hooks/useFetching'
import Loader from '../components/UI/Loader/Loader'

const PostIdPage = () => {
   const params = useParams()
   const [post, setPost] = useState({})

   const [fetchingPostId, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(id)
      setPost(response.data)
   })

   useEffect(() => {
      fetchingPostId(params.id)
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
      </div>
   )
}

export default PostIdPage
