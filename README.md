# Learnings from Chrome Extension Development

1. **Basic structure of Chrome Extensions**
2. **The role of Service Worker**: It serves as the background script of Chrome Extensions.
3. **The role of Popup**: Provides the user interface for the extension. Popup's code runs in an isolated environment and does not directly interact with the current web page.
4. **The role of Content Script**: Acts as a bridge, enabling communication between the extension and web pages.
5. **Popup to Service Worker communication**: Popup can communicate with Service Worker via `chrome.runtime.sendMessage`, suitable for interactions between the popup and the background.
6. **Content Script to Service Worker communication**: Content Script interacts with web pages and can receive messages from Service Worker using `chrome.tabs.sendMessage`.
7. **Debugging Service Worker**: Go to `chrome://extensions` and click the **Inspect button** under the Service Worker to check its running status and view Console logs.
8. **Debugging Popup**: Right-click the extension popup, select **Inspect** to open DevTools.
9. **Error - `Could not establish connection`**: Occurs when the Service Worker is not active or `onMessage` is not correctly registered.
10. **Async message not returning a response**: Ensure to return `true` in `onMessage` to keep the message channel open.
