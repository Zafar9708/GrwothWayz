// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true, // ✅ disable optimization
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Optional if you're using <img> tag instead of next/image
  },
};

export default nextConfig;
