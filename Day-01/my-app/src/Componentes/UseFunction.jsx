import React from 'react'

const UseFunction = () => {
    const list = [1,2,3,4,5]
    const list2 = ["Sandeep","Ram","Shyam","Radha"] 
return (
    <div>
        <h1>UseFunction</h1>
        {
            list.map((List) => {
                return <li>{List}</li>
            })
        }
        <hr />
        <h2>Some List   </h2>
        {
            list2.map((List) => {
                return <li>{List}</li>
            })
        }

    </div>
)
}

export default UseFunction