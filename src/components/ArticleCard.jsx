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
    setReadMoreClicked(true)
  }

  const handleClose = () => {
    setReadMoreClicked(false)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{article.title}</Typography>
        <Typography variant="body1">Author: {article.author}</Typography>
      </CardContent>
      <Box>
        <CardMedia
          component="img"
          image={article.article_img_url}
          title={article.title}
          sx={{ width: "100%" }}
        />
      </Box>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={handleClick} size="large">Read More</Button>
      </CardActions>
      {readMoreClicked ? <ArticleModal onClose={handleClose} articleId={article.article_id}/> : null}
    </Card>
  );
}

export default ArticleCard;
