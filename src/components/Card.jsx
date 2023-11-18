import React from 'react'
import './Card.css'
import edit from './edit.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
        <div className="content">
          <Link to={'edit/'+ props.id}><img className="editButton" alt="edit button" src={edit} /></Link>
          <p>Posted on {props.created_at}</p>
          <Link to={'detail/' + props.id}>
            <h2 className="title">{props.title}</h2>
          </Link>
          <p>{props.upvotes} upvotes</p>
        </div>
      </div>
  );
};

export default Card;