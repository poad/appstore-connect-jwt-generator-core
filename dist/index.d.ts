/// <reference types="node" />
export declare module JwtGenerator {
    const tokenSync: (privateKey: string | Buffer, issuerId: string, privateKeyId: string) => string;
    const token: (privateKey: string | Buffer, issuerId: string, privateKeyId: string) => Promise<string>;
}
export default JwtGenerator;
//# sourceMappingURL=index.d.ts.map