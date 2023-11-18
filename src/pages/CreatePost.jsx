import React from 'react';
import { useRef } from 'react';
import {supabase} from '../client'
import './CreatePost.css'

const CreatePost = () => {
  const formData = useRef(null)
  const createPost = async (event) => {
    event.preventDefault();
    await supabase
      .from('Posts')
      .insert({
        title: formData.current[0].value,
        content: formData.current[1].value, 
        song: formData.current[2].value,
        created_at: new Date()
      })
      .select();
    window.location = "/"
  }

  return (
    <div>
      <form ref={formData}>
        <input type="text" id="title" name="title" placeholder='Title' /><br />
        <br/>
        
        <textarea id="content" name="content" rows={10} cols={70} placeholder='Content' /><br />
        <br/>

        <input type="text" id="song" name="song" placeholder='Image URL (optional)' /><br />
        <br/>

        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  )
}
export default CreatePost