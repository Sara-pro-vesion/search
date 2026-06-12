import React from 'react'

export default function UserCard({name = 'jose fernandino', email = 'fr.jose@gmail.com', id = {}}) {

  return (
    <div className='bg-[#FFCAE5] rounded-lg flex flex-row items-center w-full max-w-[520px] p-4 mt-2 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all' key={id}>
      <div className='bg-white rounded-full mt-1 w-10 h-10 flex-shrink-0 mr-4'></div>
      <div className='flex flex-col'>
        <span className='text-2xl font-semibold leading-tight'>
          {name}
        </span>
        <span className='text-[14px] text-gray-700 mt-1'>{email}</span>
      </div>
    </div>
  )
}
