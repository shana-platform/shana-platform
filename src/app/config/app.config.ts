declare global {
    interface Window {
      __env: any;
    }
  }
  
  export const APP_CONFIG = {
    apiUrl: window.__env?.API_URL || 'http://localhost:3000/api'
  };