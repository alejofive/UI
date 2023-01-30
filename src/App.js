import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Success from "./pages/Authentication/Success";
import ResetPass from "./pages/Authentication/ResetPass";
import Hi from "./pages/Authentication/Hi";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/success" element={<Success />} />
          <Route path="/rest" element={<ResetPass />} />
          <Route path="/hi" element={<Hi />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
