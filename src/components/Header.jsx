import { Box } from "@mui/material";
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
  return (
    <Box component="header"
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
    </Box>
  );
}

export default Header;
