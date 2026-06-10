import React from 'react'

export default function userCard({name,email}) {
  return (
    <div className='flex flex-row gap-1'>
        <div className='bg-red-500 rounded-12 w-12'></div>
        <div className='flex flex-col gap-1'>
            <h1>{name}</h1>
            <h3>{email}</h3>
        </div>
    </div>
  )
}
