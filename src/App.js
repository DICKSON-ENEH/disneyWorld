import Landing from "./component/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slide from "./component/Landing/Slide";
import Signup from "./component/SignUp/Signup";
import Header from "./component/Header/Header";
import Signin from "./component/SignUp/Signin"
import Dashboard from "./component/Dashboard/Dashboard";
import Inputs from "./component/Dashboard/Inputs"



const App=() =>{
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/slide" element={<Slide/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/create" element={<Inputs/>}/>
  </Routes>
  </BrowserRouter>
    
    
  );
}

export default App;
