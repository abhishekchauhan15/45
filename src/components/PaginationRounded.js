import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({ postsPerPage, totalPosts , paginate}) {
  const pageNaumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNaumbers.push(i);
  }
  return (
    <div>
      {pageNaumbers.map((number, index) => {
        return <button key ={index} onClick= {() => paginate(number)}> { number}</button>
      
      })}
      {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
    </div>
  );
}
