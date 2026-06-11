import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

export default function ResultsList() {
     const [data,setData] = useState([])

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch((error) => console.error("ERROR: " , error));}
    ,[]);

  return (
    <div>
      {data.map((user) => (
        <UserCard name={user.name} email={user.email} id={user.id}/>
    ))}
    </div>
  )
}


