import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Welcome,
  SignIn,
  SignUp,
  ResetPassword,
  Success,
  User,
  Dashboard,
} from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/success" element={<Success />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
