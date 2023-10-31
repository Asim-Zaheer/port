import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import NAvbar from "./component/Navbar";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Work from "./component/Work";
// import "./Moon.svg"

// import game from "./tic-tac-toe/game"

alert("Sorry Portfolio is not completed yet but You can visit remain profile of mine and please give me your feedback")
function App() {
  return (
   <>
   <BrowserRouter>
   <NAvbar/>
   <Routes>
    <Route path="/" Component={Home} />
    <Route path="/contact" Component={Contact} />
    <Route path="/about"Component={About} />
    <Route path="/work" Component={Work} />
    {/* <Route path="/game" Component={Game} /> */}
    {/* <Redirect to="/" /> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
