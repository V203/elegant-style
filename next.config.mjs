/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: { unoptimized: true, loader:"akamai",path:""    },
    basePath:"",
    distDir: "dist"
    
    

};

export default nextConfig;
