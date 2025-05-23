import { useState, useContext } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { UserContext } from "../contexts/UserContext";

function AddComment({ articleId, handleNewComment }) {
  const { user } = useContext(UserContext)
  const [comment, setComment] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;

    setComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    axios
      .post(
        `https://northcoders-news-be-s4h6.onrender.com/api/articles/${articleId}/comments`,
        {
          username: user,
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
