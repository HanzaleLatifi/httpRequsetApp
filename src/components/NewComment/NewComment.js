import React, { useState } from 'react';
import './NewComment.css';
import http from '../../services/http';

function NewComment(props) {
    const [comment, setComment] = useState({ name: '', email: '', body: '' })

    const changeHandler = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {    
        e.preventDefault();
        http.post('/comments', {
            ...comment, postId: 10
        })
            .then((res) => {
                return (
                    http.get('/comments')
                )
            }).then((res) => {
                props.setComments(res.data)
            })
            .catch(() => {

            })
    }

    return (
        <div className='new-comment'>
            <form onSubmit={submitHandler}>
                <div>
                    <label>name</label>
                    <input type='text' name='name' onChange={changeHandler} ></input>
                </div>
                <div>
                    <label>email</label>
                    <input type='email' name='email' onChange={changeHandler}></input>
                </div>
                <div>
                    <label>body</label>
                    <input type='textarea' name='body' onChange={changeHandler}></input>
                </div>
                <button type='submit'>Add Comment</button>
            </form>

        </div>
    )
}

export default NewComment
