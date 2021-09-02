import React from 'react';
import './Comments.css'

function Comment({name , email , clickHandler}) {
    return (
        <div className='comment' onClick={clickHandler}>
            <p>Name:{name}</p>
            <p>Email{email}</p>
        </div>
    )
}

export default Comment
