import { Alert } from "@mui/material";

function ErrorDisplay({ error }) {
  if (!error) return null;

  return (
    <Alert severity="error" sx={{ my: 2 }}>
      {error}
    </Alert>
  );
}

export default ErrorDisplay;