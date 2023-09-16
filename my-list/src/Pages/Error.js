import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate=useNavigate()
  return (
    <div style={{ textAlign: 'center', padding: '20px', color: 'grey' }}>
      <h2>Oops, something went wrong!</h2>
      <p>We apologize for the inconvenience.</p>
      <p>The page u looking for doesnt exist.</p>
      <img id="logo" src="https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png" width="500px" alt="hi"></img>
        <form>
        <input type="text" name="search" placeholder="Search..." />
        </form>
        <button onClick={() => navigate(-1)} className="todo-button">Go Back</button>
    </div>
  )
}

export default Error