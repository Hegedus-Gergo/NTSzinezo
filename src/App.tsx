import ColorGuessr from "./comp/ColorGuessr"
import Modal from "./comp/Modal"
import Szin from "./comp/Szin"
import Coordinates from "./comp/Coordinates"

function App() {
  let li = []
for(let i=0;i<121;i++){
  li.push(i)
}

  return (<>
  {/* <Modal></Modal>
    <div className="egesz">
      {li.map(idx=><Szin key={idx}/>)}
    </div>
    <ColorGuessr></ColorGuessr> */}
    <Coordinates/>

    </>

  )
}

export default App
