import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.config.js'
dotenv.config();

const app = express()


connectDB();

app.get('/', (req, res) => {
  res.send('AI powered personal portfolio')
})
app.get('/login', (req, res) => {
  res.send('this is login page')
})

const PORT=process.env.PORT ||5000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})

