import React from 'react'
import Child from './Componentes/Child';
const App = () => {
  return (
    <div>
      <Child>
        <h1>Product Deatils</h1>
        <p>Name="Sandeep"</p>
        <p>Age="21"</p>
        <p>Gender="Male"</p>
        <p>Address="Kathmandu"</p>
      </Child>
    </div>
  )
}

export default App
// Method-2
// import React from 'react'
// import Child from './Componentes/Child';
// const App = () => {
//   return (
//     <div>
//       <h1>Human Deatils</h1>
//         <Child  Name="Sandeep" Age="21" Gender="Male" Address="Kathmandu" />
//         <Child  Name="Ram" Age="22" Gender="Male" Address="Kathmandu" />
//         <Child  Name="Shyam" Age="23" Gender="Male" Address="Kathmandu" />
//         <Child  Name="Radha" Age="24" Gender="Female" Address="Kathmandu" />
//         <Child  Name="Sita" Age="25" Gender="Female" Address="Kathmandu" />
//     </div>
//   )
// }

// export default App
// Method-1
// import Child from './Componentes/Child';
// const App = () => {
//   return (
//     <div>
//         <Child Name="Sandeep" Age="21" Gender="Male" Address="Kathmandu" />
//         </div>
//   )
// }

// export default App;