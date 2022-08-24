import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
   //тут реализовано фильтрация по выбранному условию и поиск
   const sortedPosts = useMemo(() => {
      if (sort) {
         return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
      }
      return posts
   }, [sort, posts])
   return sortedPosts
}

export const usePosts = (posts, sort, query) => {
   const sortedPosts = useSortedPosts(posts, sort)

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter((post) => post.title.toLowerCase().includes(query))
   }, [query, sortedPosts])

   return sortedAndSearchedPosts
   // окончание реализации фильтрации и посика
}
