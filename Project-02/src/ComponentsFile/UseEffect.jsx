import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Soniya")
    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log("useEffect called")
      }, [count,name])
  return (
    <>
    <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)} className='bg-blue-500 p-4 b-rounded hover:bg-slate-500 gap-2'>Add</button>
        <button onClick={() => setCount(count - 1)} className='bg-blue-500 p-4 b-rounded hover:bg-slate-500 gap-2'>Remove</button>

    </div>
    <div>
        <div>Name: {name}</div>
        <button onClick={() => setName("Sandeep")} className='bg-blue-500 pd--4 b-rounded hover:bg-black-300 gap-2'>Change Name</button>
    </div>
    </>
  )
}

export default UseEffect;