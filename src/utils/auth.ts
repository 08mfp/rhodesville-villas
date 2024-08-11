export const getAuthHeader = () => {
    const username = process.env.REACT_APP_BASIC_AUTH_USERNAME;
    const password = process.env.REACT_APP_BASIC_AUTH_PASSWORD;
    const token = btoa(`${username}:${password}`);
    return `Basic ${token}`;
  };
  
  