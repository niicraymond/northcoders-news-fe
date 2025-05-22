import axios from "axios";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import Header from "../Header";

function Homepage() {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    let url = "https://northcoders-news-be-s4h6.onrender.com/api/articles";
    if (selectedTopic) {
      url += `?topic=${selectedTopic}`;
    }
    axios.get(url).then(({ data }) => {
      setArticles(data.articles);
    });
  }, [selectedTopic]);

  return (
    <div>
      <Header selectedTopic={selectedTopic} onTopicChange={setSelectedTopic} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default Homepage;
