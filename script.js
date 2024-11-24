// script.js

document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Organic farming is better for the planet!",
    "Organic produce is free from harmful pesticides.",
    "Support local farmers and sustainable practices."
  ];
  
  let messageIndex = 0;
  
  function showPopup() {
    alert(messages[messageIndex]);
    messageIndex = (messageIndex + 1) % messages.length;
  }
  
  // Show a popup every 30 seconds
  setInterval(showPopup, 30000);
});