import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "./ReadPost.css"

const ReadPost = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(props.data);
  }, [props]);

  const sortUpvotes = () => {
    let arr = posts;
    arr.sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
    setPosts([...arr]);
  };

  const sortRecent = () => {
    let arr = posts;
    posts.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    setPosts([...arr]);
  };

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = posts.filter((post) =>
        Object.values(post)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
          );
          console.log(filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(posts);
    }
  };

  return (
    <div className="ReadPost">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(inputString) => searchItems(inputString.target.value)}
        />
      </div>
      <p>
        Sort by: <button onClick={sortRecent}>Most recent</button>{" "}
        <button onClick={sortUpvotes}>Most popular</button>
      </p>
      
      {searchInput.length > 0
        ? filteredResults.map((post) => (
            <Card
              id={post.id}
              title={post.title}
              created_at={post.created_at}
              content={post.content}
              song={post.song}
              upvotes={post.upvotes}
            />
          ))
        : posts && posts.map((post) => (
            <Card
              id={post.id}
              title={post.title}
              created_at={post.created_at}
              content={post.content}
              song={post.song}
              upvotes={post.upvotes}
            />
          ))}
    </div>
  );
};

export default ReadPost;
