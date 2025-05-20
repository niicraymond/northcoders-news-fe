import ArticleCard from "./ArticleCard";


function ArticleList({ articles }) {
  return (
    <div className="article-list">
      <h2>Articles</h2>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
