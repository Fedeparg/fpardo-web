/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // ESLint and tests run explicitly in the `build` script (eslint + vitest)
  // before `next build`, so Next's own build-time lint is disabled to avoid
  // a second, conflicting ESLint pass with a different config.
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
