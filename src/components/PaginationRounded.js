import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";

export default function PaginationRounded({ paginate }) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const PageBar = styled(Pagination)`
  
    margin-top: 20px;
  `;

  return (
    <div>
      <Pagination
        color="primary"
        count={7}
        defaultPage={1}
        onChange={handleChange}
        onClick={() => paginate(page)}
      />
    </div>
  );
}
