import axios from "axios";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import Header from "./Header";

function Homepage() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = "https://northcoders-news-be-s4h6.onrender.com/api/articles?";
    if (selectedTopic) url += `topic=${selectedTopic}&`;
    if (sortBy) url += `sort_by=${sortBy}&`;
    if (order) url += `order=${order}`;
    axios.get(url).then(({ data }) => setArticles(data.articles));
  }, [selectedTopic, sortBy, order]);

  return (
    <>
      <Header
        selectedTopic={selectedTopic}
        onTopicChange={setSelectedTopic}
        sortBy={sortBy}
        order={order}
        onSortChange={setSortBy}
        onOrderChange={setOrder}
      />
      <ArticleList articles={articles} />
    </>
  );
}

export default Homepage;
