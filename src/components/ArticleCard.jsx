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
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{article.title}</Typography>
        <Typography variant="p">Author: {article.author}</Typography>
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
        <Button size="large">Read More</Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;
