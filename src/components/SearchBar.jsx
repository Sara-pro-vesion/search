import React, { useState } from 'react'

export default function SearchBar() {
  const [input ,setInput] = useState('')
  
  const handleClick= () =>{
    setInput('')
  }
    return (
    <div>
        <form id='searchForm' onSubmit={(e) => e.preventDefault()}>
      <input
      type='text'
      value={input}
      placeholder='Search'
      className='border-2 border-[#FFCAE5] p-2 rounded-sm'
      onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className='border-2 border-[#FFCAE5] rounded-sm p-2 ' onClick={handleClick}>🔍</button></form>
    </div>
  )
}
