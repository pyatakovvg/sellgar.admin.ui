/// <reference types="react-scripts" />

namespace NodeJS {
  interface ProcessEnv {
    readonly PORT: number;
    readonly GENERATE_SOURCEMAP?: boolean;
    readonly NODE_ENV: 'development' | 'production' | 'test';

    readonly PUBLIC_URL: string;
    readonly REACT_APP_TAKE_ROWS: number;
    readonly REACT_APP_GATEWAY_API: string;
  }
}
