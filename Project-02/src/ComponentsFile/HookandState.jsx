import React from 'react'
import { useState } from 'react'

const HookandState = () => {
    const [friends, setFriends] = useState(["Sandeep","Ram","Gopal","Narayana","Gukesh"])
    const [name, setName] = useState("")
    const handlersubmit=(e)=>{
        e.preventDefault()
        setFriends([...friends,name])
        setName("")
    }
return (
    <>
    <div>
        {
            friends.map((friend,index) => {
                return <h1 key={index} className='text-3xl font-bold underline'>{friend}</h1>
            })
        }
    </div>
    <div>
        <form>
            <label htmlFor='name'>Name:</label>
            <input type="text" id = "name"className='border-2 border-black' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button className='ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'onClick={handlersubmit}>Add Friend</button>
        </form>
    </div>
    </>
)
}

export default HookandState