/** @type {import('next').NextConfig} */
const nextConfig = {
        reactStrictMode: true,
        images: {
                remotePatterns: [
                        {
                                protocol: "https",
                                hostname: "utfs.io",
                                port: "",
                                pathname: "/**",
                        },
                        {
                                protocol: "https",
                                hostname: "*.giphy.com",
                                port: "",
                                pathname: "/**",
                        },
                ],
        },
};

export default nextConfig;
