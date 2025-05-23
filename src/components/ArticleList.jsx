import ArticleCard from "./ArticleCard";
import { Box } from "@mui/material";

function ArticleList({ articles }) {
  return (
    <Box
      className="article-list"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: 3,
        padding: 3,
        maxWidth: "lg",
        margin: "0 auto",
        textAlign: 'center'
      }}
    >
      <h2>Articles</h2>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </Box>
  );
}

export default ArticleList;
