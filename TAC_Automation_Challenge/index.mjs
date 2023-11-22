import express from 'express'
import dotenv from 'dotenv'
import level0Routes from './levels/level0.js';
import level1Routes from './levels/level1.js';
import level2Routes from './levels/level2.js';
import level3Routes from './levels/level3.js';

// Env Configurations
dotenv.config();
const SERVER_PORT = process.env["SERVER_PORT"] || 4000
const FLAG_5 = process.env["FLAG_5"] || "TAC{dc5cecd55a67bfb8f90fd5dbe5d8ab79d05314ea63f4c57b510807ee97fa70bf}"

// Server start
const app = express();

app.use(express.static('./public'));

app.use("/level0/", level0Routes)
app.use("/level1/", level1Routes)
app.use("/level2/", level2Routes)
app.use("/level3/", level3Routes)

app.listen(SERVER_PORT, function () {
  console.log(`🚀 Server ready at port ${SERVER_PORT}`);
});