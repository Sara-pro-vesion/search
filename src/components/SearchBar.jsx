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
      <form id='searchForm' className='mb-6' onSubmit={(e) => e.preventDefault()}>
        <div className='flex items-center bg-white rounded-full shadow-md overflow-hidden border border-transparent'>
          <input
            type='text'
            value={input}
            placeholder='Search'
            className='flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none'
            onChange={handleChange}
          />
          <button
            type='button'
            onClick={handleClick}
            className='px-4 py-3 bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors'
            aria-label='Clear search'
          >
            🔍
          </button>
        </div>
      </form>
    </div>
  )
}
