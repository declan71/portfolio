'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonialsData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Inc',
      content: 'Declan delivered exceptional work on our company website redesign. His attention to detail and creative approach resulted in a 40% increase in user engagement. Highly recommended!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'StartUp Ventures',
      content: 'Working with Declan was a game-changer for our product launch. His full-stack development skills combined with stunning visual design created an unforgettable user experience.',
      rating: 5,
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      company: 'Design Studio Co',
      content: 'The video content Declan produced for our campaign was outstanding. His editing skills and creative vision brought our story to life in ways we never imagined possible.',
      rating: 5,
      avatar: 'ER'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CTO',
      company: 'Innovate Labs',
      content: 'Declan\'s PHP expertise helped us rebuild our legacy system with modern Laravel architecture. The result was a robust, scalable application that exceeded our expectations.',
      rating: 5,
      avatar: 'DT'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Brand Manager',
      company: 'Global Brands LLC',
      content: 'From graphic design to video production, Declan consistently delivers high-quality work. His ability to understand brand vision and execute perfectly is remarkable.',
      rating: 5,
      avatar: 'LW'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'E-commerce Director',
      company: 'ShopSmart',
      content: 'The e-commerce platform Declan built for us handles thousands of transactions daily with zero downtime. His technical skills are matched only by his professionalism.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star' : 'star star-empty'}
        fill="currentColor"
      />
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      {/* Background Elements */}
      <div className="testimonials-background"></div>
      
      <div className="testimonials-container">
        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="testimonials-title">
            Client <span className="testimonials-title-gradient">Testimonials</span>
          </h2>
          <p className="testimonials-subtitle">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              {/* Quote Icon */}
              <div className="testimonial-quote">
                <Quote size={32} />
              </div>

              {/* Rating Stars */}
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Content */}
              <p className="testimonial-content">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="testimonial-client">
                <div className="client-avatar">
                  {testimonial.avatar}
                </div>
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <div className="client-role">{testimonial.role}</div>
                  <div className="client-company">{testimonial.company}</div>
                </div>
                <div className="company-logo">
                  {testimonial.company.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel Navigation (for mobile) */}
        <motion.div
          className="testimonials-nav"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="nav-btn" onClick={prevSlide}>
            <ChevronLeft size={20} />
          </button>
          
          <div className="nav-dots">
            {testimonialsData.map((_, index) => (
              <div
                key={index}
                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          <button className="nav-btn" onClick={nextSlide}>
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}