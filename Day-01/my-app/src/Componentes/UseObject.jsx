import React from 'react'

const UseObject = () => {
    const obj = {
        name:"Sandeep",
        age:21
    }
  return (
    <div>
        <h1>UseObject</h1>
        <p>Name={obj.name}</p>
        <p>Age={obj.age}</p>
    </div>
  )
}

export default UseObject