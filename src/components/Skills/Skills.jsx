'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Code2, Palette, Video } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('development');

  const skillsData = {
    development: {
      icon: Code2,
      color: 'development',
      title: 'Development',
      skills: [
        { 
          name: 'React/Next.js', 
          level: 90, 
          tasks: ['Component architecture', 'State management', 'API integration', 'Performance optimization'] 
        },
        { 
          name: 'Node.js/Express', 
          level: 85, 
          tasks: ['RESTful APIs', 'Authentication systems', 'Database integration', 'Server deployment'] 
        },
        { 
          name: 'PHP', 
          level: 82, 
          tasks: ['Backend development', 'Web applications', 'Database integration', 'API development'] 
        },
        { 
          name: 'MongoDB', 
          level: 80, 
          tasks: ['Database design', 'Aggregation pipelines', 'Performance optimization', 'Data modeling'] 
        },
        { 
          name: 'TypeScript', 
          level: 85, 
          tasks: ['Type safety', 'Interface design', 'Error prevention', 'Code maintainability'] 
        }
      ]
    },
    design: {
      icon: Palette,
      color: 'design',
      title: 'UI/Graphics',
      skills: [
        { 
          name: 'Figma', 
          level: 90, 
          tasks: ['UI/UX design', 'Prototyping', 'Design systems', 'Collaboration'] 
        },
        { 
          name: 'Adobe Photoshop', 
          level: 85, 
          tasks: ['Photo editing', 'Digital art', 'Mockup creation', 'Graphic design'] 
        },
        { 
          name: 'Adobe Illustrator', 
          level: 80, 
          tasks: ['Vector graphics', 'Logo design', 'Illustrations', 'Brand identity'] 
        },
        { 
          name: 'UI/UX Principles', 
          level: 85, 
          tasks: ['User research', 'Wireframing', 'Usability testing', 'Design thinking'] 
        }
      ]
    },
    video: {
      icon: Video,
      color: 'video',
      title: 'Video Editing',
      skills: [
        { 
          name: 'Premiere Pro', 
          level: 88, 
          tasks: ['Video editing', 'Color grading', 'Audio mixing', 'Motion graphics'] 
        },
        { 
          name: 'After Effects', 
          level: 82, 
          tasks: ['Visual effects', 'Animation', 'Compositing', 'Motion design'] 
        },
        { 
          name: 'Video Production', 
          level: 85, 
          tasks: ['Storyboarding', 'Shot composition', 'Lighting setup', 'Post-production'] 
        },
        { 
          name: 'Color Grading', 
          level: 78, 
          tasks: ['Color correction', 'Style development', 'Mood setting', 'Consistency'] 
        }
      ]
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const currentSkills = skillsData[activeTab];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills-title">
            My <span className="skills-title-gradient">Skills</span>
          </h2>
          <p className="skills-subtitle">
            A showcase of my technical expertise across development, design, and video editing
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.keys(skillsData).map((tabKey) => {
            const tab = skillsData[tabKey];
            const IconComponent = tab.icon;
            return (
              <button
                key={tabKey}
                className={`skills-tab ${activeTab === tabKey ? 'active' : ''}`}
                onClick={() => setActiveTab(tabKey)}
              >
                <IconComponent size={20} />
                {tab.title}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {currentSkills.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={itemVariants}
              >
                <div className="skill-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                
                <div className="skill-bar-container">
                  <motion.div
                    className={`skill-bar skill-bar-${currentSkills.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                  />
                </div>

                <ul className="skill-tasks">
                  {skill.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="skill-task">
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}