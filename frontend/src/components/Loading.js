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
        src="/logo.jpg" 
        alt="Logo"
        style={{ height: '400px', width: 'auto', marginBottom: '40px' }}
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
