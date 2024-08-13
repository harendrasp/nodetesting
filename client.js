const ws = new WebSocket('ws://localhost:8057');

const messageSize = 3840 * 2160 * 3; // 4K RGB frame data.
let startTime;
let roundTripTimes = [];
const totalPackets = 100;

ws.onopen = () => {
    console.log('Connected to server');
    startTime = performance.now();
    ws.send(new ArrayBuffer(messageSize));
};

ws.onmessage = (event) => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    roundTripTimes.push(duration);
    console.log(`Round-trip time: ${duration.toFixed(3)}ms`);

    if (roundTripTimes.length < totalPackets) {
        startTime = performance.now();
        ws.send(new ArrayBuffer(messageSize));
    } else {
        const averageTime = roundTripTimes.reduce((a, b) => a + b, 0) / roundTripTimes.length;
        console.log(`Average round-trip time over ${roundTripTimes.length} messages: ${averageTime.toFixed(3)}ms`);
        ws.close();
    }
};

ws.onclose = () => {
    console.log('Connection closed');
};

ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};