import axios from "axios";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";

function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://northcoders-news-be-s4h6.onrender.com/api/articles")
      .then(({data}) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <div>
      <ArticleList articles={articles}/>
    </div>
  );
}

export default Homepage;
