import React from 'react'
import {useSelector} from 'react-redux'
import './UserList.css'
import UserCard from '../UserCard/UserCard'
 

const UserList = () => {
const users=useSelector(state=>state.userReducer.users) 
 
// console.log(users);
     return (

      
            <div className="users-content">
                <div className="users-list">
                    {users.map(user=><UserCard key={user._id} user={user}  />)}
                </div>
            </div>
    )
}

export default UserList
