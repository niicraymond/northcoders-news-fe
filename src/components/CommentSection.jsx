import axios from "axios";
import { useState, useEffect } from "react";
import { Paper, Typography, Box } from "@mui/material";

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
        <Paper key={comment.comment_id} sx={{ mb: 1}}>
          <Typography variant="body2">{comment.body}</Typography>
          <Typography variant="caption" color="text.secondary">
            — {comment.author}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default CommentSection;
