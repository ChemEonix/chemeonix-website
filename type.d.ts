/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module "motion/react" {
  export const motion: any;
}
declare module "lucide-react";
declare module "next/link" {
  import { LinkProps } from "next/dist/client/link";
  const Link: React.FC<LinkProps>;
  export default Link;
}
