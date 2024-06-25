export const API = {
  url: import.meta.env.PROD
    ? import.meta.env.VITE_PROXY_API_URL
    : import.meta.env.VITE_LOCALHOST_API_URL,
};
