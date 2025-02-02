import React from 'react';

const ChatCard = ({ sender, message, time }) => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex-shrink-0 mr-3">
        <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
          {sender.charAt(0)}
        </div>
      </div>
      <div className="bg-white p-3 rounded-xl shadow-md w-full max-w-lg">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-gray-800">{sender}</h4>
          <span className="text-gray-400 text-sm">{time}</span>
        </div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default ChatCard;