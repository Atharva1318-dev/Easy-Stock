import { useEffect } from 'react';
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage.jsx';
import About from './aboutPage/About.jsx';
import SignUp from './SignUp';
import Products from './productsPage/Products.jsx';
import PricingPage from './pricingPage/PricingPage.jsx';
import Support from './supportPage/Support.jsx';
import Navbar from './Navbar';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import Login from './Login.jsx';
import Dashboard from './Dashboard/Home.jsx';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

//This is to conditionally display navbar, means when dashboard is to be seen the navbar should not be seen, because the dashboard has it's own navbar
import { useLocation } from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    AOS.init({
      duration: 2500,
      easing: "ease-in-out",
    })
  }
    , []);

  const location = useLocation();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {

    const verifyCookie = async () => {
      //if (cookies.token) {
      // navigate("/login");
      // console.log("!cookies.token this if is getting executed");
      try {
        const { data } = await axios.post(
          "https://easy-stock-backend.onrender.com",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        console.log("API response:", data);
        if (status) {
          setUsername(user);
          // You can show a toast or perform other actions here.
        } else {
          removeCookie("token");
          setUsername(""); // Clear user state if token is invalid.
        }
      } catch (err) {
        console.error("Error verifying cookie:", err);
        setUsername("");
      }
      //}
      setLoading(false);
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = async () => {
    try {
      await axios.post("https://easy-stock-backend.onrender.com/logout", {}, { withCredentials: true });
      setUsername("");
      navigate("/");
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto mt-auto" style={{ maxWidth: "500px", maxHeight: "500px" }}>
        <DotLottieReact
          src="https://lottie.host/ca9c5f62-b1bc-489b-8805-4cbcfe412a42/XxgzHTt9xE.lottie"
          loop
          autoplay
        />
      </div>
    );
  }


  return (


    <div>
      {!location.pathname.startsWith('/home') && (  //this is because on the dashboard we do not want to show Navbar
        <Navbar username={username} onLogout={Logout} />
      )}
      {/* <Navbar username={username} onLogout={Logout} /> */}
      <div style={{ background: "linear-gradient(to bottom, #ffffff 0%, #dceeff 135%)", overflowX: "hidden" }}>
        <Routes>
          <Route path="/" element={<LandingPage username={username} />}></Route>
          <Route path="/home/*" element={<Dashboard username={username} />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/products" element={<Products />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/support" element={<Support />}></Route> */}
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>

  )
}

export default App
