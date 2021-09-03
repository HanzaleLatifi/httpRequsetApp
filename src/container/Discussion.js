import React, { useEffect, useState } from 'react'
import './Discussion.css'
import FullComment from '../components/FullComment/FullComment'
import NewComment from '../components/NewComment/NewComment'
import Comment from '../components/Comment/Comment'
import axios from 'axios' ; 
import { toast } from 'react-toastify';

function Discussion() {
    const [comments, setComments] = useState(null);
    const [selectedComment, setSelectedComment] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {

                setComments(response.data.slice(0, 4));

            }).catch((error) => {
                setError(true)
            })

    }, [])

    const commentSelectHandler = (id) => {
        setSelectedComment(id);
    }

    const renderFunc = () => {

        let renderValue = <p>LOADING</p>;
        if (error) renderValue = toast.error('error message');
        if (comments && !error) { 
           renderValue= comments.map(c => {
                return <Comment key={c.id} name={c.name} email={c.email} clickHandler={() => commentSelectHandler(c.id)} />
            })
            
        }
        return renderValue;
    }


    return (
        <main className='main-container'>
            <section >

                {renderFunc()}

            </section>

            <section>
                <FullComment selectedComment={selectedComment} />
            </section>
            <section>
                <NewComment setComments={setComments} />
            </section>

        </main>
    )
}

export default Discussion
