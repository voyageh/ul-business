import type { SFCWithInstall } from "./types";
export declare const INSTALLED_KEY: unique symbol;
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E | undefined) => SFCWithInstall<T> & E;
