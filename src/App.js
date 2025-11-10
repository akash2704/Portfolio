import React, { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ImagePreloader from "./components/ImagePreloader";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy load heavy components
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

// Critical images to preload
const criticalImages = [
  require("./Assets/home-main.svg").default,
  require("./Assets/avatar.svg").default,
  require("./Assets/about.png").default,
];

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const LoadingFallback = ({ message }) => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh',
      color: '#fff',
      fontSize: '1.2rem'
    }}>
      {message || 'Loading...'}
    </div>
  );

  return (
    <Router>
      <ImagePreloader images={criticalImages} />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/project" 
            element={
              <Suspense fallback={<LoadingFallback message="Loading Projects..." />}>
                <Projects />
              </Suspense>
            } 
          />
          <Route 
            path="/about" 
            element={
              <Suspense fallback={<LoadingFallback message="Loading About..." />}>
                <About />
              </Suspense>
            } 
          />
          <Route 
            path="/resume" 
            element={
              <Suspense fallback={<LoadingFallback message="Loading Resume..." />}>
                <Resume />
              </Suspense>
            } 
          />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
