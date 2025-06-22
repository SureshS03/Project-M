import React from 'react';

export default function Chat() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-auto p-4">
        {/* Chat messages here */}
      </div>
      <form className="p-4 bg-white flex">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow border rounded-l-lg p-2"
        />
        <button type="submit" className="px-4 bg-primary text-white rounded-r-lg">
          Send
        </button>
      </form>
    </div>
  );
}
