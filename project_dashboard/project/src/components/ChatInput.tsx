import React, { useState } from 'react';
import { Send, Plus } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-auto">
      <div className="flex items-center bg-navy-light rounded-lg">
        <button 
          type="button"
          className="p-3 text-gray-400 hover:text-gray-200"
          aria-label="Add attachment"
        >
          <Plus size={24} />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type Something..."
          className="flex-1 bg-transparent border-0 focus:ring-0 text-white py-3 px-2"
        />
        <button 
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-r-lg transition-colors duration-200"
        >
          <span className="mr-1">Send</span>
          <Send size={18} className="inline" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;