require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';
const configViewEngine = require('./config/viewEngine');
const loginRouter = require('./routes/login');
const dashboardRoutes = require('./routes/dashboard')
// Middleware parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình template engine
configViewEngine(app);

// Routes
const session = require('express-session');

app.use(session({
  secret: 'secret_key_example',  // để trong .env nếu cần
  resave: false,
  saveUninitialized: false,
}));

app.use('/', loginRouter);

app.use('/', dashboardRoutes);

const authRoutes = require('./routes/logout');
app.use('/', authRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});

