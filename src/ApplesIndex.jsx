import axios from 'axios'
import {useEffect, useState } from 'react'

export function ApplesIndex() {
  const [apples, setApples] = useState([])
  
  const handleIndex = () => {
    console.log('index')
    axios.get("/apples.json").then(response => {
      setApples(response.data)
    })
  }
    
  useEffect(handleIndex, [])
  return (
    <div>
      <h1>Apples index</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
        {apples.map(apple => (
          <div key={apple.id} className='shadow-md rounded-md mb-4'>
            <p><b>variety:</b>{apple.variety}</p>
            <p><b>color:</b>{apple.color}</p>
            <p><b>mass:</b>{apple.mass}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}