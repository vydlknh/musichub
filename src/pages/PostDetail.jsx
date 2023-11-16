import { useParams, Link } from "react-router-dom";
import Detail from "./Detail";
import React from 'react';
import edit from '../components/edit.png'
import './Detail.css'

const PostDetail = ({data}) => {
  
  const {id} = useParams();
  const post = (data || []).filter((item) => item.id == id);

  return (
    <div>
      <Link to={'/edit/'+ post[0].id}><img className="editButton" alt="edit button" src={edit} /></Link>
      <Detail id={post[0].id} created_at={post[0].created_at} title={post[0].title} content={post[0].content} song={post[0].song} upvotes={post[0].upvotes}/>
    </div>
  );
};

export default PostDetail;