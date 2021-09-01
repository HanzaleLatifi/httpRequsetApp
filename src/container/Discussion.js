import React,{useEffect , useState} from 'react'
import './Discussion.css'
import FullComment from '../components/FullComment/FullComment'
import NewComment from '../components/NewComment/NewComment'
import Comment from '../components/Comment/Comment'
import axios from 'axios'

function Discussion() {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
             
             setComments(response.data.slice(0,4));
            

        }).catch((error)=>{
            console.log(error)
        })
         
    },[])
    
    return (
        <main className='main-container'>
            <section >
                {comments.map(c=>{
                    return <Comment key={c.id} name={c.name} email={c.email} />
                })}
                
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
