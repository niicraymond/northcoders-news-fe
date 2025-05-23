import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { UserContext } from "../contexts/UserContext";

function VotingSection({ initialVotes, articleId }) {
  const { user } = useContext(UserContext);
  const [vote, setVote] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setVote(initialVotes);
  }, [initialVotes]);

  const handleVote = (amount) => {
    if (!user || hasVoted || isLoading) setVote((prev) => prev + amount);
    setHasVoted(true);
    setIsLoading(true);
    setError(null);

    axios
      .patch(
        `https://northcoders-news-be-s4h6.onrender.com/api/articles/${articleId}`,
        {
          inc_votes: amount,
        }
      )
      .then(({ data }) => {
        setVote(data.article.votes);
      })
      .catch(() => {
        setHasVoted(false);
        setVote(initialVotes);
        setError("Vote failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box>
      <Button
        onClick={() => {
          handleVote(1);
        }}
        disabled={!user || hasVoted || isLoading}
      >
        👍
      </Button>
      <Typography color="text.primary">{vote}</Typography>
      <Button
        onClick={() => {
          handleVote(-1);
        }}
        disabled={!user || hasVoted || isLoading}
      >
        👎
      </Button>
      <Box>
        {error && (
          <Typography variant="caption" color="error">
            {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default VotingSection;
