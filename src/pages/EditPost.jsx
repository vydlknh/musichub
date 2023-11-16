import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import {supabase} from '../client'
import './EditPost.css'

const EditPost = ({data}) => {
    const formData = useRef(null)
    const {id} = useParams();
    const post = (data || []).filter((item) => item.id == id);
    
    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .update({ 
                title: formData.current[0].value, 
                content: formData.current[1].value, 
                song: formData.current[2].value, 
            })
            .eq('id', id);
        window.location = "/"
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);
        window.location = "/"
    }


    return (
        <div>
            <form ref={formData}>
            <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" defaultValue={post[0].title} /><br />
                <br/>

                <label htmlFor="content">Content</label> <br />
                <input type="textarea" id="content" name="content" defaultValue={post[0].content} /><br />
                <br/>

                <label htmlFor="song">Spotify song URL</label> <br />
                <input type="song" id="song" name="song" defaultValue={post[0].song} /><br />
                <br/>
                
                <button onClick={updatePost} className='updateButton'>Update</button>
                <button onClick={deletePost} className="deleteButton">Delete</button>
            </form>
        </div>
    )
}

export default EditPost