import React, { useState } from 'react';
import TabNavigation from '../components/TabNavigation';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import { chatMessages as initialChatMessages } from '../data/mockData';
import { ChatMessage as ChatMessageType } from '../types';

const CyberKarmaGPTPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>(initialChatMessages);

  const handleSendMessage = (text: string) => {
    const newUserMessage: ChatMessageType = {
      id: `user-${Date.now()}`,
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: ChatMessageType = {
        id: `ai-${Date.now()}`,
        text: "I'm analyzing your request. Our AI is currently processing a simulated response. In a real implementation, this would connect to your security knowledge base to provide accurate information about your cybersecurity posture.",
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col">
      <TabNavigation activeTab="cyberkarma" />
      
      <div className="flex-1 overflow-y-auto py-4 mb-4">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default CyberKarmaGPTPage;