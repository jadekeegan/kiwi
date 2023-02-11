import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.component";
import SignUp from "./components/signup.component";
import SignIn from "./components/signin.component";
import Navbar from "./components/home-navbar.component"

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
