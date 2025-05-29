import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import AnimatedSection from "../components/AnimatedSection";

const Home = () => {
    return (
        <>
            <Header />
            <AnimatedSection id="hero">
                <Hero />
            </AnimatedSection>
            <AnimatedSection id="skills">
                <Skills />
            </AnimatedSection>
            <AnimatedSection id="projects">
                <Projects />
            </AnimatedSection>
            <AnimatedSection id="services">
                <Services />
            </AnimatedSection>
            <AnimatedSection id="contact">
                <Contact />
            </AnimatedSection>
            <Footer />
        </>
    );
};

export default Home;