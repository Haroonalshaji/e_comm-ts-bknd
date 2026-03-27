import express from 'express';

const app = express();

app.use(express.json());

console.log('Server is running...');

export default app;