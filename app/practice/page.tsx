'use client';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Styled component for the chat container
const ChatContainer = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
}));

// Styled component for chat messages
const ChatMessage = styled(Paper)(({ theme, isUser }) => ({
  padding: '10px 20px',
  margin: '10px 0',
  borderRadius: '20px',
  backgroundColor: isUser ? '#007bff' : '#e9ecef',
  color: isUser ? '#fff' : '#000',
  alignSelf: isUser ? 'flex-end' : 'flex-start',
}));

// Main Chat component
export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Tips on the best way to practice: Try to be detailed when we ask a question, if we make a statement we recommend pushing the conversation towards a different but connected topic!", isUser: false },
    { text: "Popular Small Talk Questions: Did you watch the game last night?, Did you do the homework yesterday?, How was your meeting this morning?...", isUser: false },
    { text: "Small Talk Phase: Ask A Common Question", isUser: false },
  ]);
  const [input, setInput] = useState('');
  const [small, setSmall] = useState(true);
  const [followUpType, setFollowUpType] = useState(''); // State to manage the follow-up type
  const [followUpInput1, setFollowUpInput1] = useState(''); // First follow-up input
  const [followUpInput2, setFollowUpInput2] = useState(''); // Second follow-up input (if needed)
  const endOfMessagesRef = useRef(null);

  const handleSend = async () => {
    if (input.trim()) {
      // Add user message
      setMessages(prevMessages => [...prevMessages, { text: input, isUser: true }]);
      setInput('');

      let response;
      let data;

      if (small) {
        // Handle small talk request
        response = await fetch('http://localhost:8000/small_talk', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: input }),
        });

        data = await response.json();
        setMessages(prevMessages => [...prevMessages, { text: data.text, isUser: false }]);
        
        setSmall(false);

        const types = ['topic', 'followup', 'emotion', 'remind'];
        setFollowUpType(types[Math.floor(Math.random() * types.length)]);
      }}
  };

  const handleFollowUpSend = async () => {
    if (followUpInput1.trim()) {
      let endpoint;

      switch (followUpType) {
        case 'topic':
          endpoint = '/relatable';
          break;
        case 'followup':
          endpoint = '/followup';
          break;
        case 'emotion':
          endpoint = '/emotion';
          break;
        case 'remind':
          endpoint = '/remind';
          break;
        default:
          return;
      }

      const requestBody = { input: followUpInput1 };

      if (followUpType === 'relate' || followUpType === 'remind') {
        if (Math.random() < 0.5 && followUpInput2.trim()) {
          requestBody.input = followUpInput2;
        } else {
          return;
        }
      }

      const response = await fetch(`http://localhost:8000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (data.question) {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: data.question, isUser: true }
        ]);
        setInput('');
      } else {
        setMessages(prevMessages => [...prevMessages, { text: followUpInput1, isUser: true }]);
        setInput('');
      }

      if (data.text) {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: data.text, isUser: false }
        ]);
      }

      if(endpoint == "/emotion"){
        setFollowUpType('');
        setSmall(true);
      } else {
        const types = ['topic', 'followup', 'emotion', 'remind'];
        setFollowUpType(types[Math.floor(Math.random() * types.length)]);
      }

      setFollowUpInput1('');
      setFollowUpInput2('');

      
    }
  };

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Use useEffect to call scrollToBottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

      <ChatContainer>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
          Chat with Us
        </Typography>
        <Box display="flex" flexDirection="column" height="400px" overflow="auto" padding="10px">
          {messages.map((message, index) => (
            <ChatMessage key={index} isUser={message.isUser}>
              {message.text}
            </ChatMessage>
          ))}

          <div ref={endOfMessagesRef} />
        </Box>

        
          <Box display="flex" alignItems="center" marginTop="10px">
          {!followUpType && (
    <>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
        style={{ marginRight: '10px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        style={{ borderRadius: '20px' }}
      >
        Send
      </Button>
    </>
  )}
        </Box>

        {followUpType && (
          <Box display="flex" flexDirection="column" marginTop="10px">
            <Typography variant="h6" gutterBottom>
              Chat powered by Google Gemini:
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder={
                  followUpType === 'topic'
                  ? 'What is relatable from the conversation...'
                  : followUpType === 'followup'
                  ? 'Add a follow-up question'
                  : followUpType === 'emotion'
                  ? 'How do you feel based on the conversation?'
                  : 'Reminds me of a time...'
              }
              value={followUpInput1}
              onChange={(e) => setFollowUpInput1(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleFollowUpSend();
              }}
              style={{ marginBottom: '10px' }}
            />
            {(followUpType === 'relate' || followUpType === 'remind') && (
              <TextField
                variant="outlined"
                fullWidth
                placeholder={
                  followUpType === 'relate'
                    ? 'I relate too...'
                    : 'Reminds me also of...'
                }
                value={followUpInput2}
                onChange={(e) => setFollowUpInput2(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleFollowUpSend();
                }}
                style={{ marginBottom: '10px' }}
              />
            )}
            <Button
              variant="contained"
              color="secondary"
              onClick={handleFollowUpSend}
              style={{ borderRadius: '20px' }}
            >
              Submit
            </Button>
          </Box>
        )}
      </ChatContainer>
    </div>
  );
}
