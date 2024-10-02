// src/App.js
import React from 'react';
import ConnectButton from './components/connectButton.js';

const App = () => {
  const handleConnect = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'connectWithAll' });
    });
  };

  return (
    <div style={styles.container}>
      <h2>LinkedIn Auto Connector</h2>
      <ConnectButton onClick={handleConnect} />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
