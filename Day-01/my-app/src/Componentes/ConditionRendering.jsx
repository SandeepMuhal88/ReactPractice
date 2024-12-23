import React from 'react'

const ConditionRendering = ({Timeofday}) => {
  return (
    <div>
        <h1>Condition Rendering</h1>
        { Timeofday === "Morning"?<p>Good Morning</p>:<p>cal Nikal</p> }

    </div>
  )
}

export default ConditionRendering