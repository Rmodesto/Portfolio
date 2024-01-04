/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "existing-domain.com",
      "another-existing-domain.com",
      "pbs.twimg.com",
      "cdn2.iconfinder.com",
      "unconfigured-domain.com", // replace with the domain from the error message
    ],
  },
};

module.exports = nextConfig;
