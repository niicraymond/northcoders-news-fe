import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Box, Button } from "@mui/material";
import SelectTopics from "./SelectTopics";
import FilterArticles from "./FilterArticles";

function Header({
  selectedTopic,
  onTopicChange,
  sortBy,
  order,
  onSortChange,
  onOrderChange,
}) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (user) {
      setUser(null);
    } else {
      navigate("/login");
    }
  };

  return (
    <Box
      component="header"
      sx={{
        bgcolor: "white",
        display: "flex",
        alignItems: "space-between",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <SelectTopics
        selectedTopic={selectedTopic}
        onTopicChange={onTopicChange}
        sx={{ minWidth: 240 }}
      />
      <FilterArticles
        onSortChange={onSortChange}
        onOrderChange={onOrderChange}
        sortBy={sortBy}
        order={order}
        sx={{ display: "flex", gap: 2, minWidth: 480 }}
      />
      <Button onClick={handleUserClick} variant="contained">
        {user ? "Sign Out" : "Sign In"}
      </Button>
    </Box>
  );
}

export default Header;
