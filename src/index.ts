"use strict";

// ref: https://github.com/tc39/proposal-global
const getGlobal = (): any => {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
}

const global = getGlobal();
module.exports = exports = global.jwtGenCore;

// Needed for TypeScript and Webpack.
if (global.fetch) {
    exports.default = global.jwtGenCore.bind(global);
}

export declare function tokenSync(
    privateKey: string | Buffer,
    issuerId: string,
    privateKeyId: string,
    duration: number | undefined,
): string;

export declare function token(
    privateKey: string | Buffer,
    issuerId: string,
    privateKeyId: string,
    duration: number | undefined,
): Promise<string>;

exports.tokenSync = tokenSync;
exports.token = token;
