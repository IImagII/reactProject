import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import Login from '../pages/Login'
import Posts from '../pages/Posts'
import { AuthContext } from '../context'

const AppRouter = () => {
   const { isAuth, setIsAuth } = useContext(AuthContext)

   return isAuth ? (
      <Routes>
         {privateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
         ))}
         <Route path='/login' element={<Posts />} />
      </Routes>
   ) : (
      <Routes>
         {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
         ))}
         <Route path='*' element={<Login />} />
      </Routes>
   )
}

export default AppRouter
