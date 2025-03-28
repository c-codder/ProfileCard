import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: center;
  padding: 16px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const ContactButton = styled.button`
  background-color: #1976d2;
  color: #fff;
  width: 120px;
  border-radius: 4px;
  border: none;
  padding: 8px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export default function ProfileCardStyled() {
  return (
    <Card>
      <Avatar src="https://via.placeholder.com/100" alt="avatar" />
      <Name>Matti Meikäläinen</Name>
      <Description>Full-stack developer, passionate about coding and coffee</Description>
      <ContactButton>Contact Me</ContactButton>
    </Card>
  );
}