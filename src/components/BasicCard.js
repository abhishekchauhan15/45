import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function BasicCard({ posts, loading }) {
  if (loading) return <h2>Loading...</h2>;
  return (
    <Card sx={{ minWidth: 275 }}>
      {posts.map((post) => {
        return (
          <CardContent>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
        );
      })}
    </Card>
  );
}
