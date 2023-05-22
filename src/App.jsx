import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { LoginStatusContext } from "./pages/Login/LoginContext";

function App() {
  const [loginStatus, setLoginStatus] = useState(
    sessionStorage.getItem("loginstatus")
  );

  return (
    <LoginStatusContext.Provider value={{ loginStatus, setLoginStatus }}>
      <HomePage />
    </LoginStatusContext.Provider>
  );
}

export default App;
