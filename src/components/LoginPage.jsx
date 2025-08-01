import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Box, TextField, Button } from "@mui/material";

function LoginPage() {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
    navigate("/");
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          bgcolor: "white",
          p: 4,
          borderRadius: 2,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Username"
          value={username}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;
