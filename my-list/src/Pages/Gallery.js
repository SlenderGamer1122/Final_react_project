import React from 'react'

import { useNavigate } from 'react-router-dom'

const Gallery = () => {
    const navigate=useNavigate()
  return (
    <div>
            <iframe width="540" height="499" src="https://www.youtube.com/embed/uITwtd92r6Y?autoplay=1" title="cute cat dancing but full version" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <button onClick={() => navigate(-1)} className="todo-button">Go Back</button>
    </div>
    
  
        
    )
}

export default Gallery