/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {},
    publicRuntimeConfig: {},
}

module.exports = {
    env: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    },
    nextConfig
}