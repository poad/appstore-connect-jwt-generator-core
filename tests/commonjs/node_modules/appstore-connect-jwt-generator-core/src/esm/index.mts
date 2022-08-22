import jwt from 'jsonwebtoken';

const signOption = (
  issuerId: string,
  privateKeyId: string,
  duration: number,
): jwt.SignOptions => ({
  algorithm: 'ES256',
  keyid: privateKeyId,
  audience: 'appstoreconnect-v1',
  expiresIn: duration,
  issuer: issuerId,
});

function jwtGenCore() {}

export function tokenSync(
  privateKey: string | Buffer,
  issuerId: string,
  privateKeyId: string,
  duration: number = 500,
): string { return jwt.sign({}, privateKey, signOption(issuerId, privateKeyId, duration)); };

export async function token(
  privateKey: string | Buffer,
  issuerId: string,
  privateKeyId: string,
  duration: number = 500,
): Promise<string> {
  return Promise.resolve(
    jwt.sign({}, privateKey, signOption(issuerId, privateKeyId, duration))
  );
};

jwtGenCore.tokenSync = tokenSync;
jwtGenCore.token = token;

export default jwtGenCore;
