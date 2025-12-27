import { motion } from 'framer-motion';
import { 
  Download,
  FileText
} from 'lucide-react';
import './About.css';

export default function About() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Declan_Okeya_Resume.pdf';
    link.download = 'Declan_Okeya_Resume.pdf';
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Profile Image */}
          <motion.div className="about-image-container" variants={itemVariants}>
            <div className="about-profile-wrapper">
              <div className="profile-image-container">
                <div className="profile-image">
                  <img 
                    src="me.jpeg" 
                    alt="Declan Okeya"
                    className="profile-picture"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="about-content" variants={itemVariants}>
            <h2 className="about-title">
              About <span className="title-gradient">Me</span>
            </h2>
            
            {/* Bio */}
            <motion.div className="about-card" variants={itemVariants}>
              <p className="about-bio">
                I'm a passionate full-stack developer and creative professional with 5+ years of experience 
                building digital products that users love. I bridge the gap between technical excellence 
                and stunning visual design.
              </p>
              <p className="about-bio">
                My unique combination of development skills and creative expertise allows me to create 
                cohesive digital experiences from concept to deployment.
              </p>
            </motion.div>

            {/* Resume Download Button */}
            <motion.button
              onClick={downloadResume}
              className="resume-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
              <FileText size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}