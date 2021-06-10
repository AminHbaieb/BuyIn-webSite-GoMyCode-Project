import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
 import './UserCard.css'
import userImg from '../../Assets/icon-contact.png'
import {useSelector} from 'react-redux'
import {deleteUser} from '../../Redux/actions/user'

    

const UserCard = ({user}) => {
const dispatch=useDispatch()
//  const user=useSelector(state=>state.user.user)
// console.log(user)

    return (
        <div className="user-card">
             
            <img className="userImage" src={user.userImageUrl} alt="image"/>
             <div className="add-item-btn">
                
                    <Link to='/basket'></Link>
                   <img 
                   src={userImg }
                        alt="userImg-icon"
                        onClick={()=>{}}// dispatch(getUser(user._id))
                        onClick={()=>{dispatch(deleteUser(user._id))}}

                    />
                   
                
            </div>
            <h3>{user.name}</h3>
            <span>{user.email}</span>
            <span>{user.phone}</span>
            
        </div>
    )
}

export default UserCard


