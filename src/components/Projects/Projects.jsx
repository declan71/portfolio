'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, FileText, Code, Palette, Video } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.',
      image: '/project-1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      type: 'development',
      year: '2024',
      links: {
        live: 'https://example.com',
        github: 'https://github.com',
        case: 'https://case-study.com'
      }
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo design, style guide, and marketing materials for a tech startup.',
      image: '/project-2.jpg',
      tags: ['Logo Design', 'Branding', 'Illustrator', 'Photoshop'],
      type: 'design',
      year: '2024',
      links: {
        behance: 'https://behance.com',
        case: 'https://case-study.com'
      }
    },
    {
      id: 3,
      title: 'Corporate Video Campaign',
      description: 'End-to-end video production for a corporate marketing campaign, including filming, editing, and motion graphics.',
      image: '/project-3.jpg',
      tags: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics'],
      type: 'video',
      year: '2024',
      links: {
        youtube: 'https://youtube.com',
        case: 'https://case-study.com'
      }
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Productivity application built with React and Firebase. Real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/project-4.jpg',
      tags: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
      type: 'development',
      year: '2023',
      links: {
        live: 'https://example.com',
        github: 'https://github.com'
      }
    },
    {
      id: 5,
      title: 'Mobile App UI/UX',
      description: 'User interface and experience design for a fitness tracking mobile application. Wireframes, prototypes, and design system.',
      image: '/project-5.jpg',
      tags: ['Figma', 'UI/UX', 'Prototyping', 'Mobile Design'],
      type: 'design',
      year: '2023',
      links: {
        behance: 'https://behance.com',
        case: 'https://case-study.com'
      }
    },
    {
      id: 6,
      title: 'Product Launch Video',
      description: 'Creative video production for a product launch campaign. Storyboarding, filming, editing, and post-production effects.',
      image: '/project-6.jpg',
      tags: ['Video Editing', 'Visual Effects', 'Sound Design', 'Animation'],
      type: 'video',
      year: '2023',
      links: {
        youtube: 'https://youtube.com',
        vimeo: 'https://vimeo.com'
      }
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Code },
    { key: 'development', label: 'Development', icon: Code },
    { key: 'design', label: 'Design', icon: Palette },
    { key: 'video', label: 'Video', icon: Video }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.type === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'development': return <Code size={16} />;
      case 'design': return <Palette size={16} />;
      case 'video': return <Video size={16} />;
      default: return <Code size={16} />;
    }
  };

  return (
    <section id="projects" className="projects-section">
      {/* Background Elements */}
      <div className="projects-background"></div>
      
      <div className="projects-container">
        {/* Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="projects-title">
            Featured <span className="projects-title-gradient">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A collection of my recent work across development, design, and video production
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <motion.button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={16} />
                {filter.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                {/* Project Image */}
                <div className="project-image">
                  <div className="project-image-placeholder">
                    {project.title}
                  </div>
                  <div className="project-overlay">
                    <div className="project-actions">
                      {project.links.live && (
                        <a href={project.links.live} className="project-btn" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.links.github && (
                        <a href={project.links.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {project.links.case && (
                        <a href={project.links.case} className="project-btn" target="_blank" rel="noopener noreferrer">
                          <FileText size={16} />
                          Case Study
                        </a>
                      )}
                      {project.links.behance && (
                        <a href={project.links.behance} className="project-btn" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Behance
                        </a>
                      )}
                      {project.links.youtube && (
                        <a href={project.links.youtube} className="project-btn" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Watch
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="project-meta">
                    <div className="project-type">
                      {getTypeIcon(project.type)}
                      {project.type}
                    </div>
                    <div className="project-year">{project.year}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          className="view-more-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="view-more-btn">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}