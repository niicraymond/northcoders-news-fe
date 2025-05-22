import { useState, useEffect } from "react";
import axios from "axios";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Header({selectedTopic, onTopicChange}) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get("https://northcoders-news-be-s4h6.onrender.com/api/topics")
      .then(({ data }) => {
        setTopics(data.topics);
      });
  }, []);

  const handleChange = (e) => {
    onTopicChange(e.target.value)
  }

  return (
    <Box sx={{bgcolor: "white"}}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="topic-label">Select Topic</InputLabel>
        <Select
          labelId="topic-label"
          value={selectedTopic}
          onChange={handleChange}
        >
          <MenuItem value="">All</MenuItem>
          {topics.map(({ slug }) => (
            <MenuItem key={slug} value={slug}>
              {slug}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Header;
