import React, { useState } from 'react';
import './NewComment.css';
import { postNewComment } from '../../services/postNewComment';
import { getAllComments } from '../../services/getAllComments';

function NewComment(props) {
    const [comment, setComment] = useState({ name: '', email: '', body: '' })

    const changeHandler = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {    
        e.preventDefault();
            postNewComment({...comment,postId:10})
            .then((res) => {
                return (
                    getAllComments()
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
