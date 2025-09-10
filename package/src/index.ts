import { JWTPayload, SignJWT, importPKCS8 } from 'jose';

const payload = (
  issuerId: string,
  duration: number,
): JWTPayload => ({
  audience: 'appstoreconnect-v1',
  expiresIn: duration,
  issuer: issuerId,
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
 */
export function tokenSync(
  privateKey: string | Buffer,
  issuerId: string,
  privateKeyId: string,
  duration = 500,
): string {
  let result: string | undefined;
  token(privateKey, issuerId, privateKeyId, duration)
    .then((token) => {
      result = token;
      return token;
    })
    .catch((error) => {
      throw new Error(`Failed to generate token: ${error.message}`);
    });
  return result ?? '';
};

/**
 * Asynchronous token generation.
 * @param privateKey 
 * @param issuerId 
 * @param privateKeyId 
 * @param duration 
 * @returns 
 */
export async function token(
  privateKey: string | Buffer,
  issuerId: string,
  privateKeyId: string,
  duration = 500,
): Promise<string> {
  try {
    const key = await importPKCS8(privateKey.toString(), 'ES256');
    return new SignJWT(payload(issuerId, duration))
      .setProtectedHeader({ alg: 'ES256', kid: privateKeyId })
      .sign(key);
  } catch (error) {
    throw new Error(`JWT token generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

const jwtGenCore = {
  tokenSync,
  token,
};

export default jwtGenCore;
