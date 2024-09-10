'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';

const testimonials = [
  {
    name: '',
    testimonial: 'This is an amazing service! It has greatly improved my communication skills.',
  },
  {
    name: '',
    testimonial: 'I use this before socializing, I can come up with topics much quicker',
  },
  {
    name: '',
    testimonial: 'Helped me a lot when talking with coworkers and friends',
  },
  {
    name: '',
    testimonial: 'Great tool for language learners, really makes you think about what you need to say.',
  },
  {
    name: 'Charlie Davis',
    testimonial: 'I’ve seen significant improvement in my speaking skills!',
  },
];

const TestimonialsSection = () => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <Typography variant="h2" style={{ textAlign: 'center', marginBottom: '20px', color: "black" }}>
        What Others Say
      </Typography>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {testimonials.map((testimonial, index) => (
          <li
            key={index}
            style={{
              marginBottom: '15px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: '#fff',
            }}
          >
            <p style={{ margin: '0', fontStyle: 'italic', color: "black" }}>"{testimonial.testimonial}"</p>
            <p style={{ margin: '5px 0 0', fontWeight: 'bold', textAlign: 'right' }}>
              - {testimonial.name || 'Anonymous'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialsSection;
