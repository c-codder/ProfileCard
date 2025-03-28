import React from 'react';
import { Card, CardContent, Avatar, Typography, Button } from '@mui/material';

export default function ProfileCardMUI() {
  return (
    <Card
      sx={{
        width: 300,
        backgroundColor: '#f5f5f5',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <CardContent>
        <Avatar
          src="https://via.placeholder.com/100"
          alt="avatar"
          sx={{ width: 100, height: 100, margin: '0 auto' }}
        />
        <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 'bold', color: '#000', mt: 2 }}>
          Matti Meikäläinen
        </Typography>
        <Typography sx={{ fontSize: '14px', color: '#666', mb: 2 }}>
          Full-stack developer, passionate about coding and coffee
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            width: 120,
            borderRadius: '4px',
            textTransform: 'none',
            mb: 2,
          }}
        >
          Contact Me
        </Button>
      </CardContent>
    </Card>
  );
}