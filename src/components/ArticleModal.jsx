import {
  Box,
  Typography,
  Modal,
  CardMedia,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useState, useEffect } from "react";
import CommentSection from "./CommentSection";
import VotingSection from "./VotingSection";
import ErrorDisplay from "./ErrorDisplay";

function ArticleModal({ onClose, articleId }) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://northcoders-news-be-s4h6.onrender.com/api/articles/${articleId}`
      )
      .then(({ data }) => {
        setArticle(data.article);
      });
  }, [articleId]);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    p: { xs: 2, sm: 3 },
    width: "clamp(320px, 90%, 720px)",
    maxHeight: "85vh",
    borderRadius: 2,
    boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
    overflowY: "auto",
    outline: "none",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    textAlign: "left",
    color: "text.primary",
  };

  return (
    <Modal open={true} onClose={onClose} aria-labelledby="article-modal-title">
      <Box sx={style}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            id="article-modal-title"
            variant="h5"
            gutterBottom
            sx={{
              color: "black",
              fontWeight: 600,
              position: "relative",
              lineHeight: 1.1,
              "&::after": {
                content: '""',
                display: "block",
                width: 60,
                height: 4,
                bgcolor: "#646cff",
                borderRadius: 2,
                mt: 1,
                mx: "auto",
              },
            }}
          >
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              color: "black",
              textAlign: "center",
              fontSize: "0.9rem",
              fontWeight: 500,
              letterSpacing: 0.5,
              mt: 1,
            }}
          >
            Author: {article.author} &bull; Topic: {article.topic}
          </Typography>
        </Box>

        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: "black",
            whiteSpace: "pre-line",
            lineHeight: 1.6,
          }}
        >
          {article.body}
        </Typography>

        {article.article_img_url && (
          <Box>
            <CardMedia
              component="img"
              image={article.article_img_url}
              title={article.title}
              sx={{
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "cover",
                borderRadius: 1.5,
                backgroundColor: "rgba(0,0,0,0.04)",
              }}
            />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            width: "100%",
            mt: 1,
            minWidth: 0,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <VotingSection articleId={articleId} initialVotes={article.votes} />
          </Box>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ color: "black", minWidth: 0 }}
          >
            Comments: {article.comment_count}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ width: "100%", minWidth: 0 }}>
          <CommentSection articleId={articleId} />
        </Box>
      </Box>
    </Modal>
  );
}

export default ArticleModal;
