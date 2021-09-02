import React,{useEffect , useState} from 'react'
import './Discussion.css'
import FullComment from '../components/FullComment/FullComment'
import NewComment from '../components/NewComment/NewComment'
import Comment from '../components/Comment/Comment'
import axios from 'axios'

function Discussion() {
    const [comments, setComments] = useState(null);
    const [selectedComment,setSelectedComment]=useState(null);
    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
             
             setComments(response.data.slice(0,4));
            

        }).catch((error)=>{
            console.log(error)
        })
         
    },[])

    const commentSelectHandler=(id)=>{
        setSelectedComment(id);
    }
    
    return (
        <main className='main-container'>
            <section >
                {comments? comments.map(c=>{
                    return <Comment key={c.id} name={c.name} email={c.email} clickHandler={()=>commentSelectHandler(c.id)} />
                }) :<p>LOADING</p>}
                
            </section>
            
            <section>
                <FullComment selectedComment={selectedComment}/>
            </section>
            <section>
                <NewComment setComments={setComments}/>
            </section>
            
        </main>
    )
}

export default Discussion
