import React, { useState, useEffect } from "react";
import BasicCard from "./BasicCard";
import PaginationRounded from "./PaginationRounded";
import Search from "./Search";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // it runs when the component mounts or whenever it updates
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  // console.log(posts);

  const indexofLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexofLastPost - postsPerPage;
  const currentPosts = posts.slice(indexofFirstPost, indexofLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // console.log(searchTerm);

  const keys = ["title", "body"];

  const filteredData = () => {
    if (searchTerm === "") {
      return currentPosts;
    }
    return posts.filter((value) => {
      return keys.some((key) => {
        return value[key].toString().toLowerCase().includes(searchTerm);
      });
    });
  };

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} />
      <BasicCard posts={filteredData()} loading={loading} />
      <PaginationRounded
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Posts;
