// src/mock/mock-server.ts
import express from 'express'; // Correct ES module import

const app = express();
const port = 9001;

app.get('/api/some-endpoint', (req, res) => {
  res.json({ message: 'This is a mock API' });
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
