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
    <div className='flex flex-col justify-center items-center p-12'>
     
      <SearchBar onSearch = {handleSearch} /> 
      <ResultsList users={filteredData} /> 
      </div>

  )
}
