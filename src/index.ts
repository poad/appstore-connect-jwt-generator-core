import jwt from 'jsonwebtoken';

export module JwtGenerator {
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
  export const tokenSync = (
    privateKey: string | Buffer,
    issuerId: string,
    privateKeyId: string,
    duration: number = 500,
  ): string => jwt.sign({}, privateKey, signOption(issuerId, privateKeyId, duration));

  export const token = async (
    privateKey: string | Buffer,
    issuerId: string,
    privateKeyId: string,
    duration: number = 500,
  ): Promise<string> => Promise.resolve(
    jwt.sign({}, privateKey, signOption(issuerId, privateKeyId, duration)),
  );
}

export default JwtGenerator;
