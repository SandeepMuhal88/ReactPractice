import React from 'react'
import { useState } from 'react'

const ToDoList = () => {
    const [todos, setTodos] = useState([])
    const [work,setWork] = useState("")
    const Handler = (e) => {
        e.preventDefault()
        setTodos([...todos,work])
        setWork("")
    }

  return (<>
    <div>
        {
            todos.map((todo,index) => {
                return<ul className='space-y-4'>
                    <li key={index}>{todo}</li>
                </ul>
            })
        }
    </div>
    <div>
        <form>
            <label htmlFor='name'>List:</label>
            <input type="text" id = "name"className='border-2 border-black' value={work} onChange={(e)=>setWork(e.target.value)} />
            <button className='ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={Handler}>Add</button>
        </form>
    </div>
  </>)
}

export default ToDoList