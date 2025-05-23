import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<ErrorDisplay error="Page not found" />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
