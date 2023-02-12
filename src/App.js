import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.component";
import SignUp from "./components/signup.component";
import SignIn from "./components/signin.component";
import Dashboard from "./components/dashboard.component";
import Profile from "./components/profile.component";

import PrivateNav from "./components/private-navbar.component";
import Navbar from "./components/home-navbar.component";
import DashboardNav from "./components/dashboard-navbar.component";
import { useState, React } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLogInTrue = () => {
    setIsLoggedIn(true);
  }

  return (
   <BrowserRouter>
    { isLoggedIn ? (  
      <PrivateNav />
    ): (<Navbar />)
    }

    <DashboardNav />
    
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn setLogInTrue={setLogInTrue}/>}></Route>
        <Route path="/dashboard/:id" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
