const fs = require('fs');

const apiUrl = process.env.API_URL || 'http://localhost:3000/api';

const envConfig = `
window.__env = {
  API_URL: "${apiUrl}"
};
`;

fs.writeFileSync('./src/assets/env.js', envConfig);
console.log('env.js created with API_URL:', apiUrl);