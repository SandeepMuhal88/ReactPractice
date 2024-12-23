import React from 'react'
import ConditionRendering from './Componentes/ConditionRendering'
import Weather from './Componentes/Weather'
import UserStatus from './Componentes/UserStatus'
const App = () => {
  return (
    <div>
      <ConditionRendering Timeofday="Morning"/>
      <Weather Temperature="30"/>
      <UserStatus isLoggedIn={true} isAdmin={false} />

    </div>
  )
}

export default App