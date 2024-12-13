document.getElementById('sendMessage').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'testMessage' }, (response) => {
        if (chrome.runtime.lastError) {
            console.error('Error:', chrome.runtime.lastError.message);
        } else {
            console.log('Response from Service Worker:', response);
        }
    });
});