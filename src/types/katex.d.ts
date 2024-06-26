declare module 'katex' {
  export function renderToString(
    formula: string,
    options?: {
      throwOnError?: boolean;
    }
  ): string;
}