/** @type {import('next').NextConfig} */
const nextConfig = {
    staticPageGenerationTimeout: 180,
    async rewrites() {
        return [
            {
                source: '/404(.*)',
                destination: '/notfound.html'
            }
        ]
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
                ]
            }
        ]
    },
    images: {
        loader: 'custom',
        loaderFile: 'image.loader.ts',
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd3gqwaovyokz23.cloudfront.net'
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com'
            },
            {
                protocol: 'https',
                hostname: 'placehold.co'
            }
        ]
    },
    reactStrictMode: true,
    bundlePagesRouterDependencies: true,
    experimental: {
        staleTimes: {
            dynamic: 365 * 24 * 60 * 60
        }
    },
    logging: false,
    allowedDevOrigins: [
        'www.ntbip.com',
        '*.www.ntbip.com',
        'backoffice.ntbip.com',
        '*.backoffice.ntbip.com',
        'api.ntbip.com',
        '*.api.ntbip.com'
    ],
    experimental: {
        workerThreads: false,
        cpus: 4
    }
}

export default nextConfig
