import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ChevronUp, 
  Mail, 
  Github, 
  Linkedin, 
  Youtube, 
  FileText,
  Home,
  User,
  Code,
  Image,
  MessageCircle
} from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show back-to-top button when scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/declan71',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: Linkedin
    },
    {
      name: 'YouTube',
      url: '#',
      icon: Youtube
    }
  ];

  const quickLinks = [
    { name: 'Home', icon: Home, section: 'home' },
    { name: 'About', icon: User, section: 'about' },
    { name: 'Skills', icon: Code, section: 'skills' },
    { name: 'Projects', icon: Code, section: 'projects' },
    { name: 'Contact', icon: MessageCircle, section: 'contact' }
  ];

  const serviceLinks = [
    { name: 'Web Development', url: '#projects' },
    { name: 'UI/UX Design', url: '#gallery' },
    { name: 'Video Editing', url: '#gallery' },
    { name: 'Brand Identity', url: '#gallery' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Declan_Okeya_Resume.pdf';
    link.download = 'Declan_Okeya_Resume.pdf';
    link.click();
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Background Elements */}
      <div className="footer-background"></div>
      
      <div className="footer-container">
        {/* Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="brand-logo">Declan Okeya</div>
            <p className="brand-tagline">
              Full-Stack Developer & Creative Professional crafting digital experiences 
              that blend technology with stunning visual design.
            </p>
            <a href="mailto:declanokeya@gmail.com" className="brand-email">
              <Mail size={16} className="inline mr-2" />
              declanokeya@gmail.com
            </a>
            
            {/* Resume Download */}
            <motion.a
              href="#"
              className="resume-download"
              onClick={downloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <motion.a
                      href={`#${link.section}`}
                      className="footer-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.section);
                      }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <IconComponent size={16} />
                      {link.name}
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Services</h3>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Connect</h3>
            <div className="social-links-footer">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="social-link-footer"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="copyright">
            © {currentYear} Declan Okeya. All rights reserved.
          </div>
          
          <div className="footer-nav">
            {legalLinks.map((link) => (
              <a key={link.name} href={link.url} className="footer-nav-link">
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <ChevronUp size={20} />
      </motion.button>
    </footer>
  );
}