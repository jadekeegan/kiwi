import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.component";
import SignUp from "./components/signup.component";
import SignIn from "./components/signin.component";
import Dashboard from "./components/dashboard.component";
import Profile from "./components/profile.component";

import PrivateNav from "./components/private-navbar.component";
import Navbar from "./components/home-navbar.component";

function App() {
  return (
   <BrowserRouter>
    <PrivateNav />

    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
