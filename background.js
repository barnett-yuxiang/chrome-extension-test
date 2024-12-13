// Listen for extension installation event
chrome.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed or reloaded:", details.reason);
});

// Listen for tab update event
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    console.log(`Tab ${tabId} updated with URL: ${tab.url}`);
  }
});

// Listen for message event
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message);
  sendResponse({ status: 'Message received', data: 'Hello from Service Worker!' });
  return true;
});
