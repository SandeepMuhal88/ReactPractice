import React from 'react'
import { SiTheboringcompany } from "react-icons/si";
const Header = () => {
return (
    <>
    <div className='flex justify-between bg-yellow-400 text-black p-4'>
        <div className='font-bold text-7xl '><SiTheboringcompany/></div>
        <div className='flex gap-12'>
            <div className='font-bold hover:text-black cursor-pointer'>Home</div>
            <div className='font-bold hover:text-black cursor-pointer'>About</div>
            <div className='font-bold hover:text-black cursor-pointer'>Products</div>
            <div className='font-bold hover:text-black cursor-pointer'>Contact</div>
        </div>
    </div>
    </>
)
}

export default Header;