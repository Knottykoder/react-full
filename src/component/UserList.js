import React from 'react'

function UserList(props) {
  return (
    <ul>
    {props.users.map((user)=>(
        <li>{user.name} {user.Email}</li>
    ))}
    </ul>
  )
}

export default UserList