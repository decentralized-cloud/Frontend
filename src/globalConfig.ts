interface GlobalConfig {
  API_GATEWAY_PUBLIC_URL: string;
}

declare global {
  interface Window {
    _env_: GlobalConfig;
  }
}

export {};
