import express from 'express';
import { port } from './config/env.js';

const app = express();


// MIDDLEWARE
app.use(express.json());

// ROUTES


// ERROR HANDLING


// APP LISTEN
app.listen(port, () => {
  console.log(`Aerver is running at PORT = ${port}`);
});


