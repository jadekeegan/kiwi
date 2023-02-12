import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.component";
import SignUp from "./components/signup.component";
import SignIn from "./components/signin.component";
import Navbar from "./components/home-navbar.component"
import Dashboard from "./components/dashboard.component";
import { useState, React } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
