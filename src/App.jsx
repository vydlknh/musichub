import './App.css';
import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPost from './pages/ReadPost'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetail from './pages/PostDetail';
import { Link } from 'react-router-dom'
import {supabase} from './client'


const App = () => {

  const [posts, setPosts] = useState(null)
    
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPost data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path:"/detail/:id",
      element :<PostDetail data ={posts}/>
    }
  ]);
    
  useEffect(() => {
    fetchPost();
  }, [])
  
  const fetchPost = async () => {
    const {data} = await supabase
      .from('Posts')
      .select(); //order data based on 'created at' column in ascending order
    setPosts(data)
  }

  return ( 

    <div className="App">
      <div className="header">
        <Link to="/"><h1>MusicHub</h1></Link>
        <Link to="/"><button className="headerBtn"> Home </button></Link>
        <Link to="/new"><button className="headerBtn"> Create New Post </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
