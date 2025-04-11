const config = {
  appName: import.meta.env.VITE_NAME || "App Name",
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000",
  secretKey: import.meta.env.VITE_SECRET_KEY || "default-api-key",
  environment: import.meta.env.VITE_NODE_ENV || "development",
  debugMode: import.meta.env.VITE_DEBUG_MODE === "true",
};

export default config;
