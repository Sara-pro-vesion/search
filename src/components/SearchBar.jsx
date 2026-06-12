import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [input ,setInput] = useState('')
  
  const handleClick= () =>{
    setInput('')
    if (typeof onSearch === 'function') onSearch('')
  }

    const handleChange = (e) => {
    const value = e.target.value;
        setInput(value);

        if (typeof onSearch === 'function') {
          onSearch(value);
        } else {
          console.error("onSearch prop is missing or not a function!");
        }}

    return (
    <div>
        <form id='searchForm' className='mb-5' onSubmit={(e) => e.preventDefault()}>
      <input
      type='text'
      value={input}
      placeholder='Search'
      className='w-[220px] text-white border-2 border-[#FFCAE5] p-2 rounded-sm'
      onChange={handleChange}
      ></input>
        <button type='button' className='border-2 border-[#FFCAE5] rounded-sm p-2 ' onClick={handleClick}>🔍</button></form>
    </div>
  )
}
