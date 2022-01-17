import React from 'react';
import  './App.css';

const Panel=()=>{
    return (
        <>
            <div className='panel'>
                <ul className='list'>
                    <li className="item"><a className="link" href='#'>Dashboard</a></li>
                    <li className="item"><a className="link" href='#temperature'>Temperature</a></li>
                    <li className="item"><a className="link" href='#humidity'>Humidity</a></li>
                    <li className="item"><a className="link" href='#moisture'>Moisture</a></li>
                </ul>
            </div>
        </>
    )
};

export default Panel;