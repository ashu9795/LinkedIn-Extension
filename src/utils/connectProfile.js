export const connectWithProfiles = () => {
    // Find all the "Connect" buttons on the page
    const connectButtons = Array.from(document.querySelectorAll('button[aria-label="Connect"]'));
  
    if (connectButtons.length === 0) {
      alert('No profiles to connect with.');
      return;
    }
  
    // Function to click a button with a delay
    const clickWithDelay = (button, delay) => {
      setTimeout(() => {
        button.click();
        console.log('Connect button clicked');
      }, delay);
    };
  
    // Iterate over the connect buttons and trigger the click event with a delay
    connectButtons.forEach((button, index) => {
      const delay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000; // Random delay between 1-3 seconds
      clickWithDelay(button, delay * index); // Stagger clicks to avoid being flagged
    });
  };
  