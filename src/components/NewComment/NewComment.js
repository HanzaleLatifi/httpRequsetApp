import React from 'react'
import './NewComment.css'

function NewComment() {
    return (
        <div className='new-comment'>
            <div>
                <label>name</label>
                <input type='text'></input>
            </div> 
            <div>
                <label>email</label>
                <input type='email'></input>
            </div>
              <div>
                <label>body</label>
                <input type='textarea'></input>
            </div>
            
        </div>
    )
}

export default NewComment
