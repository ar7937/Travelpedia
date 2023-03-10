import React from 'react'
import UserList from '../Components/UserList'
const Users = () => {
    const users=[
        {
            id:'user1',
            name:"anushka",
            image:"https://github.com/ar7937/StudentPortal/blob/main/Login1.png?raw=true",
            places:1
        },
        {
            id:'user2',
            name:"viktor",
            image:"https://github.com/ar7937/StudentPortal/blob/main/Login1.png?raw=true",
            places:2
        },
        
        
    ]
  return (
    <UserList items={users}/>
  )
}

export default Users
