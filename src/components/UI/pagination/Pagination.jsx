import React from 'react'
import { getPagesArray } from '../../../utils/pages'

const Pagination = ({ totalPage, page, changePage }) => {
   let pagesArray = getPagesArray(totalPage)

   return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
         {pagesArray.map((p) => (
            <span onClick={() => changePage(p)} key={p} className={page === p ? 'page page__current' : 'page'}>
               {p}
            </span>
         ))}
      </div>
   )
}

export default Pagination
