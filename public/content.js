// Function to automatically click all Connect buttons on LinkedIn
function connectWithAll() {
  // Select all button elements that likely represent "Connect" buttons
  const connectButtons = Array.from(document.querySelectorAll('button'))
    .filter(button => button.querySelector('span') && button.querySelector('span').textContent.includes("Connect"));

  // Edge case: Handle if no connectable profiles are found
  if (connectButtons.length === 0) {
    alert('No connectable profiles found.');
    return;
  }

  console.log(`Found ${connectButtons.length} connectable profiles.`);

  let index = 0;

  // Function to click the next button with a random delay between 1-3 seconds
  function clickNextButton() {
    if (index < connectButtons.length) {
      connectButtons[index].click();
      console.log(`Clicked connect button ${index + 1} of ${connectButtons.length}`);
      index++;
      // Set delay between 1-3 seconds before clicking the next button
      setTimeout(clickNextButton, Math.random() * 2000 + 1000);
    } else {
      alert(`${connectButtons.length} connection requests sent!`);
    }
  }

  // Start clicking the "Connect" buttons
  clickNextButton();
}

// Create a floating "Connect with All" button
const button = document.createElement('button');
button.innerText = 'Connect with All';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.zIndex = '1000';
button.style.padding = '20px 40px'; // Increased padding for a larger button
button.style.backgroundColor = '#0A66C2'; // LinkedIn color
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '50px'; // Circular button
button.style.cursor = 'pointer';
button.style.fontSize = '18px'; // Larger text
button.style.fontWeight = 'bold'; // Bold text
button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Slight shadow for better visibility

// Add event listener to the button to trigger the connect function
button.addEventListener('click', connectWithAll);

// Append the button to the body of the document
document.body.appendChild(button);
