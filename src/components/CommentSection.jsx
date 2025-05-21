import axios from "axios";
import { useState, useEffect } from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import AddComment from "./AddComment";

const TemporyUser = "grumpy19";

function CommentSection({ articleId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://northcoders-news-be-s4h6.onrender.com/api/articles/${articleId}/comments`
      )
      .then(({ data }) => {
        setComments(data.comments);
      });
  }, [articleId]);

  const handleDelete = (comment_id) => {
    axios
      .delete(
        `https://northcoders-news-be-s4h6.onrender.com/api/comments/${comment_id}`
      )
      .then(() => {
        setComments((prev) => prev.filter((c) => c.comment_id !== comment_id));
      });
  };

  const handleNewComment = (newComment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <Box
      sx={{
        maxHeight: 200,
        overflowY: "scroll",
        p: 1,
        mt: 2,
        bgcolor: "background.paper",
      }}
    >
      {comments.map((comment) => (
        <Paper key={comment.comment_id} sx={{ mb: 1 }}>
          <Typography variant="body2">{comment.body}</Typography>
          <Typography variant="caption" color="text.secondary">
            — {comment.author}
          </Typography>
          {comment.author === TemporyUser && (
            <Button
              size="small"
              color="error"
              onClick={() => handleDelete(comment.comment_id)}
            >
              Delete
            </Button>
          )}
        </Paper>
      ))}
      <AddComment articleId={articleId} handleNewComment={handleNewComment} />
    </Box>
  );
}
export default CommentSection;
