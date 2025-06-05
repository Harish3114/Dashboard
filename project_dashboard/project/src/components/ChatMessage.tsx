import React from 'react';
import { ThumbsUp, ThumbsDown, Copy } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAssistant = message.sender === 'assistant';
  
  return (
    <div className={`flex mb-6 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      {isAssistant && (
        <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center mr-4">
          <span className="text-2xl">🤖</span>
        </div>
      )}
      <div className={`max-w-3xl ${isAssistant ? 'bg-blue-900' : 'bg-blue-700'} p-4 rounded-lg`}>
        <div className="whitespace-pre-line">{message.text}</div>
        {isAssistant && (
          <div className="flex mt-2 justify-end">
            <button className="text-gray-400 hover:text-gray-300 p-1" aria-label="Like">
              <ThumbsUp size={16} />
            </button>
            <button className="text-gray-400 hover:text-gray-300 p-1" aria-label="Dislike">
              <ThumbsDown size={16} />
            </button>
            <button className="text-gray-400 hover:text-gray-300 p-1" aria-label="Copy">
              <Copy size={16} />
            </button>
          </div>
        )}
      </div>
      {!isAssistant && (
        <div className="w-12 h-12 rounded-full bg-orange-500 ml-4 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;