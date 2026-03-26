const fs = require('fs');

const envConfig = `
window.__env = {
  API_URL: "${process.env.API_URL}"
};
`;

fs.writeFile('./src/assets/env.js', envConfig, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Environment file created!');
});