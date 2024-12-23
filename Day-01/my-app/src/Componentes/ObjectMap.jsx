import React from 'react'

const ObjectMap = () => {
    const list = [
        {
            id:1,
            name:"Sandeep",
            age:21
        },
        {
            id:2,
            name:"Ram",
            age:22
        },
        {
            id:3,
            name:"Shyam",
            age:23
        },
        {
            id:4,
            name:"Radha",
            age:24
        }
    ]
  return (
    <div>
        <h1>Make list and use object and map functon</h1>
        <p>Peple List</p>
        {
            list.map((L) => {
                return (
                    <div>
                        <p>Name={L.name}</p>
                        <p>Age={L.age}</p>
                    </div>
                )
            })
        }
    </div>
    
  )
}

export default ObjectMap