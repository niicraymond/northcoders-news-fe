import { useState } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

function AddComment({ articleId, handleNewComment }) {
  const [comment, setComment] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;

    setComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://northcoders-news-be-s4h6.onrender.com/api/articles/${articleId}/comments`,
        {
          username: "grumpy19",
          body: comment,
        }
      )

      .then(({ data }) => {
        setComment("");
        handleNewComment(data.comment);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Add Comment..."
        value={comment}
        onChange={handleInput}
      />
      <Button type="submit">Post Comment</Button>
    </Box>
  );
}

export default AddComment;
