'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionSection = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <Accordion style={{ marginBottom: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ddd' }}
        >
          <Typography variant="h6">Unlocking Your Creative Conversation Topics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Have you ever had a moment where you didn't know what to say? Our chat bot is designed to build your ability to come up with topics and help deepen your everyday conversations in the real world!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginBottom: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ddd' }}
        >
          <Typography variant="h6">Building Your Communication Muscle</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Practice makes perfect, that's why we wanted to help you exercise the communication muscles and build up your ability to have a quality conversation!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginBottom: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ddd' }}
        >
          <Typography variant="h6">Engage You In Thoughtful Conversation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Conversing with us allows you to take your conversations in the real world from small talk to deeper levels by engaging you in opportunities to guide the conversation forward!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
