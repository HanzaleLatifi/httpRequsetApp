import React from 'react';
import './Comments.css'

function Comment({name , email}) {
    return (
        <div className='comment'>
            <p>Name:{name}</p>
            <p>Email{email}</p>
        </div>
    )
}

export default Comment
