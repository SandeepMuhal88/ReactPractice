import React from 'react';
import ReactDOM from 'react-dom'; // Use the correct capitalization

const UsePortal = () => {
    return ReactDOM.createPortal(
        <>
            <div>
                <h1>UsePortal</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>,
        document.getElementById('portal') // Ensure this element exists in your HTML
    );
};

export default UsePortal;
