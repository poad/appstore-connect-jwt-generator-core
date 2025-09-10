/**
 * Synchronous token generation.
 * @deprecated Use `token` instead.
 *
 * @param privateKey
 * @param issuerId
 * @param privateKeyId
 * @param duration
 * @returns
 */
export declare function tokenSync(privateKey: string | Buffer, issuerId: string, privateKeyId: string, duration?: number): string;
/**
 * Asynchronous token generation.
 * @param privateKey
 * @param issuerId
 * @param privateKeyId
 * @param duration
 * @returns
 */
export declare function token(privateKey: string | Buffer, issuerId: string, privateKeyId: string, duration?: number): Promise<string>;
declare const jwtGenCore: {
    tokenSync: typeof tokenSync;
    token: typeof token;
};
export default jwtGenCore;
