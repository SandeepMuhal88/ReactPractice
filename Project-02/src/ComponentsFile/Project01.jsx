import React from 'react'
import { useState } from 'react'
const Project01 = () => {
    const [count, setCount] = useState(0)

return (
    <>
    <div className="min-h-screen bg-primary text-white flex items-center justify-center">
    <div className="p-6 bg-secondary text-accent rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">{count}</h1>
      <button className="bg-black mt-6 bg-accent text-white px-4 py-2 rounded hover:bg-accent-light" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className=" bg-black mt-6 bg-accent text-white px-4 py-2 rounded hover:bg-accent-light" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
    </div>
    </>
)
}

export default Project01;