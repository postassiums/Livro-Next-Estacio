import { loadEnvConfig } from "@next/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: loadEnvConfig(process.cwd()).parsedEnv
};

export default nextConfig;
