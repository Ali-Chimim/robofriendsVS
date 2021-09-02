import React from 'react';
import './Card.css'
const card = (props)=>{
    const {name,email,id} = props;
    return (
        <div className='card'>
            <img alt = "ali" src = {`https://robohash.org/${id}`}/>
            <div>
                <h2 >{name}</h2>
                <p>{email}</p>
               
            </div>
        </div>
       
    );
}

export default card;