import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

function VotingSection({ initialVotes, articleId }) {
  const [vote, setVote] = useState(initialVotes);

  useEffect(() => {
    setVote(initialVotes);
  }, [initialVotes]);

  const handleVote = (amount) => {
    setVote((prev) => prev + amount);
    axios
      .patch(
        `https://northcoders-news-be-s4h6.onrender.com/api/articles/${articleId}`,
        {
          inc_votes: amount,
        }
      )
      .then(({ data }) => {
        setVote(data.article.votes);
      });
  };

  return (
    <Box>
      <Button
        onClick={() => {
          handleVote(1);
        }}
      >
        👍
      </Button>
      <Typography color="text.primary">
        {vote}
      </Typography>
      <Button
        onClick={() => {
          handleVote(-1);
        }}
      >
        👎
      </Button>
    </Box>
  );
}

export default VotingSection;
