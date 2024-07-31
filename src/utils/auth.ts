// export const getAuthHeader = () => {
//     const username = process.env.REACT_APP_BASIC_AUTH_USERNAME;
//     const password = process.env.REACT_APP_BASIC_AUTH_PASSWORD;
  
//     if (!username || !password) {
//       throw new Error('Missing BASIC_AUTH_USERNAME or BASIC_AUTH_PASSWORD environment variables');
//     }
  
//     const auth = `${username}:${password}`;
//     return 'Basic ' + btoa(auth);
//   };
  

  // src/utils/auth.ts
// src/utils/auth.ts
export const getAuthHeader = () => {
    const username = process.env.REACT_APP_BASIC_AUTH_USERNAME;
    const password = process.env.REACT_APP_BASIC_AUTH_PASSWORD;
    const token = btoa(`${username}:${password}`);
    return `Basic ${token}`;
  };
  
  