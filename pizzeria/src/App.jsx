import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Register from "./pages/components/Register";
// import Login from "./pages/components/Login";
import Cart from "./pages/components/Cart";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Cart></Cart>
      {/*  <Home></Home>
       <Register></Register>  
      <Login></Login> */}
      <Footer></Footer>
    </>
  );
}

export default App;
