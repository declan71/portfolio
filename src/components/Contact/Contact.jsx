import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Github, Linkedin, Youtube, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/declan71',
      icon: Github,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: Linkedin,
      color: '#0077b5'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: Youtube,
      color: '#ff0000'
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      content: 'declanokeya@gmail.com',
      link: 'mailto:declanokeya@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+254 117027102',
      link: 'tel:+254 117027102'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Nairobi, Kenya',
      link: 'https://maps.google.com/?q=Nairobi,Kenya'
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
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
    <section id="contact" className="contact-section">
      {/* Background Elements */}
      <div className="contact-background"></div>
      
      <div className="contact-container">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">
            Let's <span className="contact-title-gradient">Connect</span>
          </h2>
          <p className="contact-subtitle">
            Ready to bring your next project to life? Get in touch and let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div className="contact-form-container" variants={itemVariants}>
            {isSubmitted && (
              <div className="success-message">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  rows="5"
                  disabled={isSubmitting}
                />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="contact-info" variants={itemVariants}>
            {/* Contact Methods */}
            <div className="contact-methods">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    className="contact-method"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="method-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="method-content">
                      <h3>{method.title}</h3>
                      <a href={method.link} className="method-link">
                        {method.content}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3 className="form-label mb-4">Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="social-link"
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
            </div>

            {/* Calendly Booking */}
            <div className="booking-section">
              <h3 className="form-label mb-4">Schedule a Call</h3>
              <a
                href="https://calendly.com/declanokeya"
                className="booking-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar size={18} />
                Book a Meeting
              </a>
            </div>

            {/* Quick Note */}
            <motion.div
              className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                I typically respond within 24 hours. For urgent matters, feel free to call or schedule a meeting.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}