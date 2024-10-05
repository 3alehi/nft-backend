// server.js
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

// Middleware برای لاگ کردن درخواست‌ها
app.use(morgan('combined'));

// روت ساده برای آزمایش
app.get('/', (req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  res.send('Hello! Your server is up and running.');
});

// روتی که درخواست POST را لاگ می‌کند
app.post('/log', (req, res) => {
  console.log(`POST request received at /log`);
  res.json({ message: 'POST request logged successfully!' });
});

// شروع سرور
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
