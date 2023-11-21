import express from 'express'
import dotenv from 'dotenv'
import level0Routes from './levels/level0.js';
import level1Routes from './levels/level1.js';

// Env Configurations
dotenv.config();
const SERVER_PORT = process.env["SERVER_PORT"] || 4000
const FLAG_3 = process.env["FLAG_3"] || "TAC{ea48266a725636fea755acdbcbb921d65abe03c0a18d62b8eb3670cf23663f9d}"
const FLAG_4 = process.env["FLAG_4"] || "TAC{6ca79670b2dfe2e2059ccbbece565676c53ece8b46b2cfca46fdc3361c906fbd}"
const FLAG_5 = process.env["FLAG_5"] || "TAC{dc5cecd55a67bfb8f90fd5dbe5d8ab79d05314ea63f4c57b510807ee97fa70bf}"

// Server start
const app = express();

app.use(express.static('./public'));

app.use("/level0/",level0Routes)
app.use("/level1/",level1Routes)

app.listen(SERVER_PORT, function () {
  console.log(`🚀 Server ready at port ${SERVER_PORT}`);
});