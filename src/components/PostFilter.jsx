import React from 'react'
import MySlelect from '../components/UI/select/MySlelect'
import MyInput from '../components/UI/input/MyInput'

const PostFilter = ({ filter, setFilter }) => {
   return (
      <div>
         <MyInput placeholder='поиск...' value={filter.query} onChange={(event) => setFilter({ ...filter, query: event.target.value })} />

         <hr style={{ margin: '15px 0' }} />
         <MySlelect
            value={filter.sort}
            onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
            defaultValue={'Выберите значение сортировки'}
            options={[
               { value: 'title', name: 'По названию' },
               { value: 'body', name: 'По описанию' },
            ]}
         />
      </div>
   )
}

export default PostFilter
