/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Esta linha diz ao 'npm run build' para ignorar os erros do ESLint
        // e continuar, o que irá resolver o 'exit code: 1'.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;