import React from 'react'
import { useState } from 'react'
const UseState = () => {
    const [count, setCount] = useState(0)
return (
    <div>
        <h1>UseState</h1>
        <p>Count={count}</p>
        <button onClick={() => setCount(count + 1)} className='bg-blue-500 p-4 b-rounded hover:bg-slate-500 gap-2'>Increment</button>
        <button onClick={() => setCount(count - 1)} className='bg-blue-500 p-4 b-rounded hover:bg-slate-500 gap-2'>Decrement</button>

    </div>
)
}

export default UseState