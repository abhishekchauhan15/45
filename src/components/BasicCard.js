import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ posts, loading }) {
  if (loading) return <h2>Loading...</h2>;
  return (
    <Card sx={{ minWidth: 275 }}>
      {posts.map((post, index) => {
        return (
          <CardContent key ={index}>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
        );
      })}
    </Card>
  );
}
