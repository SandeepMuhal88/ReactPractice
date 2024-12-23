function Weather({Temperature}) {

    if (Temperature >= 37) {
        return <h1>Hot Day</h1>
    } else if (Temperature <= 15) {
        return <h1>Cold Day</h1>
    } else {
        return <h1>Normal Day</h1>
    }
//     return (
//         <div>
//             {
//           Temperature >= 37 ? ( <h1>Hot Day</h1> ) : Temperature <= 15 ? ( <h1>Cold Day</h1> ) : ( <h1>Normal Day</h1> )
//             }
//         </div>
//     )
}
export default Weather;