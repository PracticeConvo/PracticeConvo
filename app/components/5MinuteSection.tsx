'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';

const FiveMinutesSection = () => {
  return (
    <div style={{ textAlign: 'center', margin: '40px 0px' }}>
      <Typography style={{ color:"green", marginBottom: '10px', fontSize: '1.5rem' }}>5 Minutes A Day</Typography>
      <p style={{ color: '#111111' }}>Practicing conversations with us for just 5 minutes a day increases your conversation flow and ability to connect with others!</p>
    </div>
  );
};

export default FiveMinutesSection;
