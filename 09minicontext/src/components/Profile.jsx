import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
  const {user} = useContext(UserContext) 

  if (!user) return <h1>Not logged in</h1>
  return (
    <div>
    <div>Profile: {user.username}</div>

    <h1>more component</h1>
    </div>

  )
}

export default Profile