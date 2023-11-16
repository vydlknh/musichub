import React, {useState} from 'react'
import './Detail.css'
import {supabase} from '../client'


const Detail = (props) =>  {

  const [upvotes, setUpvotes] = useState(0)
  const updateUpvotes = async (event) => {
    event.preventDefault();

    await supabase
      .from('Posts')
      .update({upvotes: upvotes + 1})
      .eq('id', props.id)
    setUpvotes((upvotes) => upvotes + 1)
  }

  return (  
      <div className='whole-page'>
        <h1 className="title">{props.title}</h1>
        <p>Created on {props.created_at}</p>
        <p>{props.content}</p>
        <p>{props.song}</p>
        <p>{upvotes} upvotes</p>
        <button className="upvotes" onClick={updateUpvotes}>Upvote</button>
      </div>
  );
};

export default Detail;