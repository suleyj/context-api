import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./userContext";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
