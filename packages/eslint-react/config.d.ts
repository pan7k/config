declare module "@pan7k/eslint-react" {
  import { Config } from "typescript-eslint";

  export interface ReactConfigOptions {
    tsProjects?: string[];
  }

  export function createReactConfig(options?: ReactConfigOptions): Config[];

  const config: Config[];
  export default config;
}
