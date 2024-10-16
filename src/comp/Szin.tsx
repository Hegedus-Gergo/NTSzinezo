import React, { useState } from 'react'

const Szin = () => {
    const szinek =["black", "red","grey","green","orange"]
    const [idx, setIdx] = useState(0)
    const toggle = () => {
        if(idx<=szinek.length){
            setIdx(idx+1)
        }
        else{
            setIdx(0)
        }
    }
  return (
    
    <button onClick={toggle} className='colorbtn' style={{background:szinek[idx]}}>nigga</button>
  )
}

export default Szin