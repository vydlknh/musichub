import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadPost = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      setPosts(props.data);
    }, [props]);
    
    const sortUpvotes = (props) => {
      props.data.sort((a,b) => {
        if (a.upvotes  < b.upvotes) {
          return -1;
        }
        if (a.upvotes  > b.upvotes) {
          return 1;
        }
        return 0;
      });
    }

    return (
      <div className="ReadPost">
        <p>Sort by: </p> <span><button>Most recent</button> <button onClick={sortUpvotes}>Most popular</button></span>
        {
          posts && posts.length > 0 ?
          posts.map((post) => 
              <Card id={post.id} title={post.title} created_at={post.created_at} content={post.content} song={post.song} upvotes={post.upvotes} />
          ) : <h2>{'No Post Yet 😞'}</h2>
        }
      </div>  
    )
}

export default ReadPost;