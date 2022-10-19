import React, { useState, useEffect } from "react";
import ActionCard from "./ActionCard";

const Infinite = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      console.log("fetching");
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${page}/comments`
      );
      const data = await res.json();
      setPosts([...data]);
      setLoading(false);
    };
    fetchPosts();
  }, [page]);

  function atBottom(ele) {
    var sh = ele.scrollHeight;
    var st = ele.scrollTop;
    var ht = ele.offsetHeight;
    if (ht === 0) {
      return true;
    }
    if (st === sh - ht) {
      return true;
    } else {
      return false;
    }
  }

  window.onscroll = () => {
    if (atBottom(document.body)) {
      console.log(page);
      setPage(page + 1);
    }
  };

  return (
    <div>
      {posts.map((post) => (
          <div key={post.id}>
          {post.id}
          🚀 {post.name}
          <br></br>
          {post.email} <br></br>
          🎯 {post.body}
          <br></br>
          <br></br>
          {/* <ActionCard name={post.name} email={post.email} body={post.body} /> */}
        </div>
      ))}
    </div>
  );
};

export default Infinite;
