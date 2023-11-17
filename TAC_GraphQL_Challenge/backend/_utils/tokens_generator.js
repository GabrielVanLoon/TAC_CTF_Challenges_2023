const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Function to generate a random strong key
function generateRandomKey(length) {
  return crypto.randomBytes(length).toString('hex');
}

// Secret key for signing and verifying the JWT
const secretKey = "1b2a51053e85b004f252e32a07817e836eae9a834b7a69113db3c1ba7cab7f8d" || generateRandomKey(32);

// Payload for the JWT
const payload_alexander = {
  "id": "5",
  "name": "Alexander Harrison",
  "username": "alex_harrison",
  "email": "alexander.harrison@wickedcorp.com",
  "role": { "id": "1", "name": "Employee" }
};

console.log(jwt.sign(payload_alexander, secretKey, { }));
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJuYW1lIjoiQWxleGFuZGVyIEhhcnJpc29uIiwidXNlcm5hbWUiOiJhbGV4X2hhcnJpc29uIiwiZW1haWwiOiJhbGV4YW5kZXIuaGFycmlzb25Ad2lja2VkY29ycC5jb20iLCJyb2xlIjp7ImlkIjoiMSIsIm5hbWUiOiJFbXBsb3llZSJ9LCJpYXQiOjE3MDAwOTA0MDR9.gwBdNrw9jHvpABrwni4xeuc1koycKh39l5xmJUyZ7SE

const payload_benjamin = {
  "id": "3",
  "name": "Benjamin Reynolds",
  "username": "benjamin_reynolds",
  "email": "benjamin.reynolds@wickedcorp.com",
  "role": { "id": "3", "name": "HR Specialist" }
} 

console.log(jwt.sign(payload_benjamin, secretKey, { }));
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJuYW1lIjoiQmVuamFtaW4gUmV5bm9sZHMiLCJ1c2VybmFtZSI6ImJlbmphbWluX3JleW5vbGRzIiwiZW1haWwiOiJiZW5qYW1pbi5yZXlub2xkc0B3aWNrZWRjb3JwLmNvbSIsInJvbGUiOnsiaWQiOiIzIiwibmFtZSI6IkhSIFNwZWNpYWxpc3QifSwiaWF0IjoxNzAwMDkwNDY4fQ.0_YbkRIRl14QSWJpL-Rd_jcsRrTA7Bsk-rk45nl33e8


const payload_natalie = {
    "id": "8",
    "name": "Natalie Walker",
    "username": "natalie_walker",
    "email": "natalie.walker@wickedcorp.com",
    "role": { "id": "1", "name": "Employee" }
} 

console.log(jwt.sign(payload_natalie, secretKey, { }));
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgiLCJuYW1lIjoiTmF0YWxpZSBXYWxrZXIiLCJ1c2VybmFtZSI6Im5hdGFsaWVfd2Fsa2VyIiwiZW1haWwiOiJuYXRhbGllLndhbGtlckB3aWNrZWRjb3JwLmNvbSIsInJvbGUiOnsiaWQiOiIxIiwibmFtZSI6IkVtcGxveWVlIn0sImlhdCI6MTcwMDA5MDk3M30.pY3JbwqovOOfYKJzeUnzzkccRWgncae_bTJgtTkw3Z8


