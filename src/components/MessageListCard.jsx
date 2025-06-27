import React, { useState } from 'react';

export default function MessageListCard() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const messages = [
    {
      id: 1,
      name: 'John Doe',
      message: 'Hi Angelina! How are you?',
      avatar: '👨‍💼',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-200'
    },
    {
      id: 2,
      name: 'Courtney Henry',
      message: 'Do you need that design?',
      avatar: '👩‍🦱',
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-200'
    },
    {
      id: 3,
      name: 'Jerome Bell',
      message: 'What is the price of hourly...',
      avatar: '👨‍💻',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      id: 4,
      name: 'Arlene McCoy',
      message: 'Awesome!!',
      avatar: '👩‍🎨',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-200'
    }
  ];

  const handleMessageClick = (messageId) => {
    setSelectedMessage(messageId);
  };

  return (
    <div className="bg-white rounded-lg p-4 max-w-sm border border-gray-100">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Message</h2>

      {/* Message List */}
      <div className="space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            onClick={() => handleMessageClick(msg.id)}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
              selectedMessage === msg.id ? 'bg-gray-50' : ''
            }`}
          >
            {/* Avatar */}
            <div className={`w-12 h-12 rounded-full ${msg.bgColor} border ${msg.borderColor} flex items-center justify-center text-lg flex-shrink-0`}>
              {msg.avatar}
            </div>

            {/* Message Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-sm mb-1">
                {msg.name}
              </h3>
              <p className="text-sm text-gray-500 truncate">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}