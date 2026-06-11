import React from 'react'
import SearchBar from './components/SearchBar'
import ResultsList from './components/ResultsList'
import UserCard from './components/UserCard'

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center p-12'>
      <SearchBar/>
      <UserCard/>
      <ResultsList/>
    </div>
  )
}
