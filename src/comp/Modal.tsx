import React, { useState } from 'react'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
    {isOpen ? <div className='modal'><button onClick={toggle}><img src="images.png" alt="xd" /></button></div>:<button onClick={toggle}>apa</button>}
    </>
)
}

export default Modal