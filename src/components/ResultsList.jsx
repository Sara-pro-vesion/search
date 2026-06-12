import React, { useState } from 'react'
import UserCard from './UserCard'

export default function ResultsList({ users }) {
  return (
    <div className='flex flex-col items-center space-y-4'>
      {users.map((user) => (
        <UserCard name={user.name} email={user.email} id={user.id} key={user.id} />
      ))}
    </div>
  )
}


