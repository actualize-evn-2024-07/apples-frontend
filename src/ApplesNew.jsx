import axios from 'axios'
import {useNavigate} from "react-router-dom"

export function ApplesNew() {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('something something')
    const params = new FormData(event.target)
    axios.post("/apples.json", params).then(response => {
      navigate('/')
    })
  }
  
  return (
    <div>
      <p>Make a new apple</p>
      <div>
        <form onSubmit={handleSubmit}>
          <p>variety:<input type="text" name="variety" /></p>
          <p>color:<input type="text" name="color" /></p>
          <p>mass:<input type="text" name="mass" /></p>
          <button>Create Apple</button>
        </form>
      </div>
    </div>
  )
}