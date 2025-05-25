import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Footer />
        </>
    );
};

export default Home;