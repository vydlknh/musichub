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
        song: formData.current[2].value
      })
      .select();
      console.log(formData.current[0].value);
      console.log(formData.current[1].value);
      console.log(formData.current[2].value);
    // window.location = "/"
  }

  return (
    <div>
      <form ref={formData}>
        <input type="text" id="title" name="title" placeholder='Title' /><br />
        <br/>
        
        <input type="text" id="content" name="content" placeholder='Content' /><br />
        <br/>

        <input type="text" id="song" name="song" placeholder='Spotify song URL' /><br />
        <br/>

        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  )
}
export default CreatePost