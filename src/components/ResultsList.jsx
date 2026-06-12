import React, { useState } from 'react'
import UserCard from './UserCard'

export default function ResultsList({users}) {

  return (
    <div>
      {users.map((user) => (
        <UserCard name={user.name} email={user.email} key={user.id}/>
    ))}
    </div>
  )
}


