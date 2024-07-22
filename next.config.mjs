/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nextui.org',
                port: '',
                pathname: '**',
            },
        ],
        unoptimized: true,
    }
};

export default nextConfig;
