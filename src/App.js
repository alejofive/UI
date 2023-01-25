import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import Success from "./components/Authentication/Success";
import ResetPass from "./components/Authentication/ResetPass";
import Hi from "./components/Authentication/Hi";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
