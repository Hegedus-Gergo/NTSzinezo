import React from 'react'

const Animals = () => {
    const allatok = ["kutya","nigger","kacsa","szamár","ogre"]

  return (
    <><>
    {allatok.map(allat => <h1>{allat}</h1>)}
    </></>
  )
}

export default Animals