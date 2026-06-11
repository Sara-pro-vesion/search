import React from 'react'

export default function UserCard({name = 'jose fernandino', email = 'fr.jose@gmail.com', id}) {

  const checkNameLength = (n = '') =>
    (typeof n === 'string' && n.length > 19) ? n.slice(0, 13) + '...' : n;
  return (
    <div className='bg-[#FFCAE5] rounded-sm flex flex-row justify-right w-[250px] h-fit p-2 mt-2' key={id}>
        <div className='bg-white rounded-[12rem] mt-1 w-7 h-7 '></div>
        <div className='flex flex-col ml-3 '>
            <span className='text-[22px] overflow-hidden'>
                 {checkNameLength(name)}
            </span>
            <span className='text-[14px] ml-2'>{email}</span>
        </div>
    </div>
  )
}
