export const getAuthHeader = () => {
    const username = process.env.REACT_APP_BASIC_AUTH_USERNAME;
    const password = process.env.REACT_APP_BASIC_AUTH_PASSWORD;
  
    if (!username || !password) {
      throw new Error('Missing BASIC_AUTH_USERNAME or BASIC_AUTH_PASSWORD environment variables');
    }
  
    const auth = `${username}:${password}`;
    return 'Basic ' + btoa(auth);
  };
  