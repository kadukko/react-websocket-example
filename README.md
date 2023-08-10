# WebSocket Communication Repository

This repository contains a simple implementation of WebSocket communication for React-based applications. WebSocket communication allows for bidirectional real-time message exchange between the client and server, making it ideal for real-time updates and other real-time functionalities.

## Files

### websocket.js

This file defines a module that creates and manages a WebSocket connection. It uses the Singleton pattern to ensure that only one connection instance is created. The connection is established when the instance is first needed and is reused for sending and receiving messages.

### events.js

This file defines a module that facilitates publishing and subscribing to custom events using the browser's event system. It provides functions for subscribing, unsubscribing, and publishing custom events.

### component.jsx

This is an example React component that demonstrates the use of the websocket.js and events.js modules. It displays a paragraph indicating that it's listening to WebSocket messages with the "websocket-event-name" event and a button that, when clicked, sends a message to the server via WebSocket.