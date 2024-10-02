// popup.js (optional logic for the popup)
document.getElementById('connectAllBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: connectWithAll
    });
  });
});
