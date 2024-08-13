
# WebSocket Performance Testing

This script helps to simulate and observe performance issues in WebSocket data transfer across different Node.js versions.

## Steps to Run the Script

1. **Navigate to the Project Directory:**

   ```bash
   git clone https://github.com/harendrasp/nodetesting.git
   cd nodetesting
   ```

2. **Install the Required Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Server:**

   ```bash
   npm start
   ```

4. **Open Chrome Browser(with www.google.com) and Access the Console:**

   - Press `F12` or `Ctrl + Shift + I` to open the Developer Tools.
   - Go to the `Console` tab of google.com.

5. **Execute the Client Code:**

   - Paste the `client.js` code into the console.
   - Press `Enter` to execute it.

6. **Observe the Round-Trip Time:**

   - Compare the Round-Trip Time (RTT) for Node.js 16 and Node.js 18 to observe any performance differences.
