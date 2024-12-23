import React from 'react'

const Child = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Child
// Method-2
// import React from 'react'

// const Child = ({Name,Age,Gender,Address}) => {
//   return (
//     <div>
//         <ul>
//             <li>Name={Name}</li>
//             <li>Age={Age}</li>
//             <li>Gender={Gender}</li>
//             <li>Address={Address}</li>
//         </ul>
//         <hr />
//     </div>
//   )
// }

// export default Child
// Method-1
// import React from 'react'

// const Child = (props) => {
//   return (
//     <div>
//         <h1>Print Data</h1>
//         <p>Name={props.Name}</p><p>Age={props.Age}</p><p>Gender={props.Gender}</p><p>Address={props.Address}</p>
//     </div>
//   )
// }

// export default Child