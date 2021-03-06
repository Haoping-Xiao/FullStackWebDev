import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {useSelector} from 'react-redux'


const User=()=>{
  const match=useRouteMatch('/users/:id')
  const users=useSelector(state=>state.users)
  const user=users.find(user=>user.id===match.params.id)
  console.log(user)
  const blogs=user.blogs
  return(
    <div>
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <ul>
        {blogs.map(blog=>
          <li key={blog.id}>
            {blog.title}
          </li>
        )}
      </ul>
    </div>
  )
}
export default User