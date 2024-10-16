import { useState } from 'react'

const ColorGuessr = () => {
    const [red,setRed] =useState(0)
    const [green,setGreen] = useState(0)
    const [blue,setBlue] = useState(0)

    const [randomRed] = useState(Math.floor(Math.random()*255+1))
    const [randomGreen] = useState(Math.floor(Math.random()*255+1))
    const [randomBlue] = useState(Math.floor(Math.random()*255+1))

    const [showrandom, setShowrandom] = useState(false)

  return (
    <div style={{
        background:`rgb(${randomRed},${randomGreen},${randomBlue})`
        
    }}>
        <div style={{
            width:"100px",aspectRatio:1,background:`rgb(${red},${green},${blue})`
        }}>
        </div>
    <label htmlFor="red">R - {red}</label>
    <br />
    <input value={red} onChange={(e)=>setRed(Number(e.target.value))} type='range' id='red' min={0} max={255}/>
    <br />
    <label htmlFor="green">G - {green}</label>
    <br />
    <input value={green} onChange={(e)=>setGreen(Number(e.target.value))} type='range' id='green' min={0} max={255}/>
    <br />
    <label htmlFor="blue">B - {blue}</label>
    <br />
    <input value={blue} onChange={(e)=>setBlue(Number(e.target.value))} type='range' id='blue' min={0} max={255}/>
    <br />
    <button onClick={()=>setShowrandom(true)}>guess</button>{showrandom?<h2>rgb({randomRed},{randomGreen},{randomBlue})</h2>:<h2></h2>}
    
    </div>
    
  )
}

export default ColorGuessr