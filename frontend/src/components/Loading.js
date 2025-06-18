import React from 'react';

const Loading = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      height: '100vh',
      fontSize: '1.5rem'
    }}>
      <img 
        src="/logo.png" 
        alt="Logo"
        style={{ width: '100px', marginBottom: '20px' }}
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
