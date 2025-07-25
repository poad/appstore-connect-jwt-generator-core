import { SignJWT, importPKCS8 } from 'jose';
const payload = (issuerId, duration)=>({
        audience: 'appstoreconnect-v1',
        expiresIn: duration,
        issuer: issuerId
    });
/**
 * Synchronous token generation.
 * @deprecated Use `token` instead.
 * 
 * @param privateKey
 * @param issuerId 
 * @param privateKeyId 
 * @param duration 
 * @returns 
 */ export function tokenSync(privateKey, issuerId, privateKeyId, duration = 500) {
    let result;
    token(privateKey, issuerId, privateKeyId, duration).then((token)=>{
        result = token;
        return token;
    }).catch((error)=>{
        throw new Error(`Failed to generate token: ${error.message}`);
    });
    return result ?? '';
}
/**
 * Asynchronous token generation.
 * @param privateKey 
 * @param issuerId 
 * @param privateKeyId 
 * @param duration 
 * @returns 
 */ export async function token(privateKey, issuerId, privateKeyId, duration = 500) {
    const key = await importPKCS8(privateKey.toString(), 'ES256');
    return new SignJWT(payload(issuerId, duration)).setProtectedHeader({
        alg: 'ES256',
        kid: privateKeyId
    }).sign(key);
}
const jwtGenCore = {
    tokenSync,
    token
};
export default jwtGenCore;


//# sourceMappingURL=index.js.map