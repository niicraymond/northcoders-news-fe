import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function FilterArticles({ sortBy, order, onSortChange, onOrderChange, sx }) {
  const handleSort = (e) => {
    onSortChange(e.target.value);
  };

  const handleOrder = (e) => {

    onOrderChange(e.target.value);
  };

  return (
    <Box sx={sx}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          label="Sort By"
          value={sortBy}
          onChange={handleSort}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
          <MenuItem value="comment_count">Comments</MenuItem>
          <MenuItem value="created_at">Date</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <InputLabel id="order-label">Order</InputLabel>
        <Select
          labelId="order-label"
          label="Order"
          value={order}
          onChange={handleOrder}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterArticles;
