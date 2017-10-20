// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/d2c72d7337163e43b995f785345adb8ac30c5971/jade/index.d.ts
declare module 'jade' {
// Type definitions for jade
// Project: https://github.com/jadejs/jade
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type JadeCustomFilterFunction = (text: string, options: {
    [key: string]: boolean;
}) => string;

export interface JadeOptions {
    filename?: string;
    basedir?: string;
    doctype?: string;
    pretty?: boolean | string;
    filters?: {
        [key: string]: JadeCustomFilterFunction
    };
    self?: boolean;
    debug?: boolean;
    compileDebug?: boolean;
    globals?: string[];
    cache?: boolean;
    inlineRuntimeFunctions?: boolean;
    name?: string;
}

export interface TemplateLocals {
    [key: string]: any;
}

export type JadeGenerationFunction = (locals?: TemplateLocals) => string;

export function compile(template: string, options?: JadeOptions): JadeGenerationFunction;
export function compileFile(path: string, options?: JadeOptions): JadeGenerationFunction;
export function compileClient(template: string, options?: JadeOptions): JadeGenerationFunction;
export function compileClientWithDependenciesTracked(template: string, options?: JadeOptions): {
    body: JadeGenerationFunction;
    dependencies: string[];
};
export function render(template: string, options?: JadeOptions): string;
export function renderFile(path: string, options?: JadeOptions): string;
}
