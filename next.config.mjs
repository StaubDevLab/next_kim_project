/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/**',
            },{
                protocol: 'https',
                hostname: 'ujpadfcfmysbpqeiggpg.supabase.co',
                port: '',
                pathname: '/storage/**',
            },
        ],
    }
};

export default nextConfig;
