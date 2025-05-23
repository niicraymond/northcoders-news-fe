import { Box, Typography, Modal, CardMedia, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useState, useEffect } from "react";
import CommentSection from "./CommentSection";
import VotingSection from "./VotingSection";

function ArticleModal({ onClose, articleId }) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://northcoders-news-be-s4h6.onrender.com/api/articles/${articleId}`
      )
      .then(({ data }) => {
        console.log(data.article);
        setArticle(data.article);
      });
  }, [articleId]);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "grey",
    p: 3,
    width: "90%",
    maxWidth: 600,
    borderRadius: 2,
    boxShadow: 24,
    maxHeight: "90vh",
    overflowY: "auto",
    outline: "none",
    textAlign: 'center' 
  };

  return (
    <Modal open={true}>
      <Box sx={style}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" gutterBottom sx={{color: "black"}}>
          {article.title}
        </Typography>
        <Typography variant="body2" gutterBottom sx={{color: "black"}}>
          Author: {article.author} Topic: {article.topic}
        </Typography>
        <Typography variant="body1" gutterBottom sx={{color: "black"}}>
          {article.body}
        </Typography>
        {/* <Typography variant="body2" gutterBottom>{article.created_at}</Typography> */}
        <Box>
          <CardMedia
            component="img"
            image={article.article_img_url}
            title={article.title}
            sx={{
              width: "100%",
              maxHeight: 300,
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </Box>
        <VotingSection articleId={articleId} initialVotes={article.votes} />
        <Typography variant="body2" gutterBottom sx={{color: "black"}}>
          Comments: {article.comment_count}
        </Typography>
        <CommentSection articleId={articleId} />
      </Box>
    </Modal>
  );
}

export default ArticleModal;
