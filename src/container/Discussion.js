import React from 'react'
import './Discussion.css'
import FullComment from '../components/FullComment/FullComment'
import NewComment from '../components/NewComment/NewComment'
import Comment from '../components/Comment/Comment'

function Discussion() {
    return (
        <main className='main-container'>
            <section >
                <Comment/>
            </section>
            <section>
                <FullComment/>
            </section>
            <section>
                <NewComment/>
            </section>
            
        </main>
    )
}

export default Discussion
