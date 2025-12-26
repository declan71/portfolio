'use client';
import './Testimonials.css';

export default function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Inc',
      content: 'Declan delivered exceptional work on our company website redesign. His attention to detail and creative approach resulted in a 40% increase in user engagement.',
      rating: 5,
      avatar: 'SJ',
      color: '#3B82F6'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'StartUp Ventures',
      content: 'Working with Declan was a game-changer for our product launch. His full-stack development skills combined with stunning visual design.',
      rating: 5,
      avatar: 'MC',
      color: '#10B981'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      company: 'Design Studio Co',
      content: 'The video content Declan produced for our campaign was outstanding. His editing skills and creative vision brought our story to life.',
      rating: 5,
      avatar: 'ER',
      color: '#8B5CF6'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CTO',
      company: 'Innovate Labs',
      content: 'Declan\'s PHP expertise helped us rebuild our legacy system with modern Laravel architecture. Exceeded our expectations.',
      rating: 5,
      avatar: 'DT',
      color: '#F59E0B'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'CEO',
      company: 'Digital Solutions',
      content: 'Outstanding performance and dedication. The project was delivered ahead of schedule with exceptional quality.',
      rating: 5,
      avatar: 'LW',
      color: '#EC4899'
    }
  ];

  // Create seamless loop by duplicating testimonials
  const allTestimonials = [...testimonialsData, ...testimonialsData];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? 'star' : 'star star-empty'}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">Client Testimonials</h2>
          <p className="testimonials-subtitle">
            What clients say about working with me
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="carousel-wrapper">
          <div className="infinite-track">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`testimonial-slide ${index >= testimonialsData.length ? 'duplicate' : ''}`}
                style={{ 
                  '--accent-color': testimonial.color
                }}
              >
                <div className="testimonial-content-wrapper">
                  {/* Quote Icons */}
                  <div className="quote-icon">
                    ❝
                  </div>
                  <div className="quote-icon-bottom">
                    ❞
                  </div>

                  {/* Rating */}
                  <div className="rating-stars">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="testimonial-text">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="client-info">
                    <div 
                      className="client-avatar"
                      style={{ background: testimonial.color }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div className="client-details">
                      <h4 className="client-name">{testimonial.name}</h4>
                      <p className="client-role">{testimonial.role}</p>
                      <p className="client-company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}