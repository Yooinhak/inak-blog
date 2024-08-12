/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  serverRuntimeConfig: {
    // mode: process.env.MODE,
  },
  publicRuntimeConfig: {
    // appVersion: process.env.APP_VERSION,
    // apiHost: process.env.API_HOST,
  },
};

export default nextConfig;
