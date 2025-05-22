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
    <Box component="form" onSubmit={handleSubmit} sx={{ bgcolor:"white", p: 2 }}>
      <TextField
        label="Username"
        value={username}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" sx={{ mt: 2 }}>
        Sign In
      </Button>
    </Box>
  );
}

export default LoginPage;
