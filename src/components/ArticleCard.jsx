import ArticleModal from "./ArticleModal";
import { useState } from "react";
import {
  Card,
  CardMedia,
  CardActions,
  Button,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function ArticleCard({ article }) {
  const [readMoreClicked, setReadMoreClicked] = useState(false);

  const handleClick = () => {
    setReadMoreClicked(true);
  };

  const handleClose = () => {
    setReadMoreClicked(false);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        boxShadow: 3,
        margin: 1,
        textAlign: 'center'
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author: {article.author}
        </Typography>
      </CardContent>
      <Box sx={{ px: 2 }}>
        <CardMedia
          component="img"
          image={article.article_img_url}
          title={article.title}
          sx={{ width: "100%" }}
        />
      </Box>
      <CardActions sx={{ justifyContent: "center", py: 2 }}>
        <Button
          onClick={handleClick}
          size="large"
          variant="contained"
          sx={{
            borderRadius: 2,
            px: 4,
            textTransform: "none",
          }}
        >
          Read More
        </Button>
      </CardActions>
      {readMoreClicked ? (
        <ArticleModal onClose={handleClose} articleId={article.article_id} />
      ) : null}
    </Card>
  );
}

export default ArticleCard;
