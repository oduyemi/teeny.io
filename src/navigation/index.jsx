import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Landing from "../pages/Landing/index";
import Features from "../pages/Features/index";
import Integration from "../pages/Integration/index";
import Contact from "../pages/Contact/index";
import Login from "../pages/Login/index";
import Register from "../pages/Register/index";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/features" element={<Features />} />
                <Route path="/integration" element={<Integration />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />}  />
            </Routes>
        </BrowserRouter>
    );
};
