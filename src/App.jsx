import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import ResultsList from './components/ResultsList'

export default function App() {

  const [query ,setQuery] = useState('');
  const [data ,setData] = useState([]);

  useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json))
        .catch((error) => console.error("ERROR: " , error));
        console.log("data fetched")}
      ,[]);
      
  const filteredData = query
    ? data.filter((user) => user.name.toLowerCase().includes(query))
    : data

  const handleSearch = (text) => {
    setQuery(text.toLowerCase())
    console.log('Searching for:', text)
  }

  return (
    <div className='min-h-screen flex items-start justify-center py-16'>
      <div className='app-container px-6'>
        <header className='mb-8'>
          <h1 className='text-4xl font-extrabold text-gray-900'>People</h1>
          <p className='text-gray-600 mt-1'>Search contacts quickly</p>
        </header>

        <div className='mb-6'>
          <SearchBar onSearch={handleSearch} />
        </div>

        <ResultsList users={filteredData} />
        {filteredData.length === 0 && (
          <p className='text-center text-gray-500 mt-6'>No results found</p>
        )}
      </div>
    </div>
  )
}
