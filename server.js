/**
 * server.js code
 * Import necessary modules
 */
const WebSocket = require('ws');
const wsPort = 8057;

// Create a WebSocket server
const server = new WebSocket.Server({ port: wsPort });

// Handle WebSocket connections
server.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    ws.send(message); // Echo back the received message
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Log WebSocket server status
console.log(`WebSocket server running on ws://localhost:${wsPort}`);