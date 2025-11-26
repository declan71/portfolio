'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Animated Background Shapes */}
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      {/* Main Content */}
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name - No profile picture here */}
          <motion.h1
            variants={itemVariants}
            className="hero-name"
          >
            Declan <span className="hero-name-gradient">Okeya</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="hero-subtitle"
          >
            Full-Stack Developer • Graphic Designer • Video Editor
          </motion.div>

          {/* Elevator Pitch */}
          <motion.p
            variants={itemVariants}
            className="hero-pitch"
          >
            Crafting digital experiences that blend cutting-edge technology with stunning visual design 
            and compelling storytelling.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="hero-button-container"
          >
            <button
              onClick={scrollToProjects}
              className="cta-button"
            >
              View My Work
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div
            className="scroll-content"
            onClick={scrollToAbout}
          >
            <span className="scroll-text">Scroll to explore</span>
            <ChevronDown size={24} className="scroll-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>
    </section>
  );
}