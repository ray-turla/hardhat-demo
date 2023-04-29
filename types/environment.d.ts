export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SEPOLIA_URL: string;
      REPORT_GAS: boolean;
      ENVIRONMENT: "production" | "development" | "local"
      PRIVATE_KEY: string;
      ETHERSCAN_API_KEY: string;
      PROJECT_NAME: string;
    }
  }
}