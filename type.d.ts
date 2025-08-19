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
  import { LinkProps } from "next/link";
  import { ForwardRefExoticComponent } from "react";

  const Link: ForwardRefExoticComponent<LinkProps>;

  export default Link;
}
