// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import Donate from "./pages/Donate";

import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
    return (
        <BrowserRouter basename = "/" >
            <Navbar />
            <Routes>
                <Route path="/resources" element={<Resources />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />

                <Route path="/programs" element={<Programs />} />
                <Route path="/donate" element={<Donate />} />

                <Route path="/contact" element={<Contact />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
