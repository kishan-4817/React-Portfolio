import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
};

export default Home;