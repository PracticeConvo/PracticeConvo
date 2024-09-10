'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';

const HeroSection = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '300px',
      backgroundColor: '#f0f4f8',
      borderBottomLeftRadius: '50% 120px',
      borderBottomRightRadius: '50% 120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
      marginBottom: '40px',
      padding: '20px',
    }}>
      <Typography variant="h4" style={{ color: '#333', marginBottom: '16px' }}>
        Thoughtful Conversation
      </Typography>
      <Typography variant="body1" style={{ color: '#555', maxWidth: '600px', marginBottom: '20px' }}>
        Upgrade your conversation skills by unlocking creative topics on the fly, building communication muscles, and engaging in thoughtful conversations!
      </Typography>
      <div style={{ marginTop: '20px' }}>
        <a
          href="/practice"
          style={{
            margin: '0 8px',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '100%',
            outline: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          Practice Conversations
        </a>
        <a
          href="/blogs"
          style={{
            margin: '0 10px',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#28a745',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
            outline: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
        >
          Read Our Blog
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
