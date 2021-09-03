import React, { useState, useEffect } from 'react'
import './FullComment.css';
import axios from 'axios';

function FullComment({ selectedComment , setComments }) {

    const [comment, setComment] = useState(null);

    useEffect(() => {
        if (selectedComment) {
            const getComment = async () => {
                try {
                    const { data } = await axios.get(`http://localhost:3001/comments/${selectedComment}`);
                    setComment(data)
                } catch {

                }
            }

            getComment();
        }
    }, [selectedComment]) ;
    
    const deleteHandler=async()=>{
        try {
            await axios.delete(`http://localhost:3001/comments/${selectedComment}`) ;
            const{data}=await axios.get('http://localhost:3001/comments');
            setComments(data);
            setComment(null) ; //for delete fullcommnt and show plz select a comment 

        } catch (error) {
            
        }
    }

    if(!comment) return <p>plz select a comment ...!</p>

    return (
        <div className='full-comment'>
            <p>name : {comment.name}</p>
            <p>email :{comment.email}</p>
            <p>body :{comment.body}</p>
            <button onClick={deleteHandler} >delete</button>
        </div>
    )
}

export default FullComment
