import React, { useState, useEffect } from "react";
import BasicCard from "./BasicCard";
import PaginationRounded from "./PaginationRounded";
import SearchAppBar from "./SearchAppBar";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  // it runs when the component mounts or whenever it updates
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setPosts(data.products);
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

  const keys = ["title", "description"];

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
      <SearchAppBar setSearchTerm={setSearchTerm} />
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
