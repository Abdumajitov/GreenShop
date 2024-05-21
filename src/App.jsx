import "./App.css";
import Wel from "./Pages/WelcomePage/Wel";
import Prod from "./Pages/Products/Prod";
import Footer from "./Pages/Navbar/Footer/Footer";
import Blog from "./Pages/OurBlogs/Blog";

function App() {
  return (
    <>
      <div className="cont">
        <Wel />
        <Prod />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
