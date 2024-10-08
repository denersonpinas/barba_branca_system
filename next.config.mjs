/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
            search: '?color=indigo&shade=500'
          },
          {
            protocol: 'https',
            hostname: '**.unsplash.com',
          },
        ],
      },
};

export default nextConfig;
