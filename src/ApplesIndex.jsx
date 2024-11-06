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
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {apples.map(apple => (
        <div key={apple.id}>
          <p><b>variety:</b>{apple.variety}</p>
          <p><b>color:</b>{apple.color}</p>
          <p><b>mass:</b>{apple.mass}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}