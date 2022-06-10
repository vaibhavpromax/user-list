import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import Users from "./components/User/Users";
import { useState, useCallback } from "react";
import { AuthContext } from "./components/auth-context";
import useLocalStorage from "./components/useLocalStorage";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            }
          >
            <Route index element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
