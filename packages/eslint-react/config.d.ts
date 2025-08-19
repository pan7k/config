declare module "@pan7k/eslint-react" {
  import { Config } from "typescript-eslint";

  export interface ConfigOptions {
    projects?: string[];
  }

  export function createConfig(options?: ConfigOptions): Config[];

  const config: Config[];
  export default config;
}
