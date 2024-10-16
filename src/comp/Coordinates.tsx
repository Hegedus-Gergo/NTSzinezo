import React, { useState } from 'react'
type Marker={
    x :number,y:number
}

const Coordinates = () => {
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    const [markers,setMarkers] = useState<Marker[]>([])
    const pinMaker = ()=>{
        setMarkers([...markers,{x:x,y:y}])
        setX(0)
        setY(0)
    }
  return (
    <div>
        <div className="pálya" style={{
            width:"200px",aspectRatio:1,border:"1p solid black",position:"relative", background:"green"
        }}>{markers.map(marker => <div className="marker" style={{left:marker.x,bottom:marker.y}}></div>)}
            <div style={{
                width:"10px",aspectRatio:1,background:"white",position:"absolute",left:x,bottom:y
            }}></div>
        </div>

        <input value={x} onChange={(e)=>setX(Number(e.target.value))} type="range" max={188} />
        <input value={y} onChange={(e)=>setY(Number(e.target.value))} type="range" max={188}/>
    <br />
    <button onClick={pinMaker}>Pinmarker</button>
    </div>
  )
}

export default Coordinates