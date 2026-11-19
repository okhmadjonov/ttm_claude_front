export const env = {
  API_URL: import.meta.env.VITE_API_URL ?? '/api',
  APP_NAME: import.meta.env.VITE_APP_NAME ?? 'Admin Panel',
} as const;
