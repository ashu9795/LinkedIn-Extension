// src/components/ConnectButton.js
import React from 'react';

const ConnectButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      Connect with All
    </button>
  );
};

const styles = {
  button: {
    padding: '30px 40px',
    backgroundColor: '#0A66C2',
    color: '#fff',
    border: 'none',
    borderRadius: '50px', // Increased border radius for a more circular shape
    cursor: 'pointer',
    fontSize: '18px', // Increased font size
  }
};

export default ConnectButton;
