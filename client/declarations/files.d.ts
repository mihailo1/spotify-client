/**
 * inspired by https://github.com/storybooks/storybook/issues/6434#issuecomment-480507965
 */

declare module '*.md' {
  const content: string;
  export = content;
}
