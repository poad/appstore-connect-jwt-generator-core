import jwt from 'jsonwebtoken';

export module JwtGenerator {
  const signOption = (issuerId: string, privateKeyId: string): jwt.SignOptions => ({
    algorithm: 'ES256',
    keyid: privateKeyId,
    audience: 'appstoreconnect-v1',
    expiresIn: 1200,
    issuer: issuerId,
  });
  export const tokenSync = (
    privateKey: string | Buffer,
    issuerId: string,
    privateKeyId: string,
  ): string => jwt.sign({}, privateKey, signOption(issuerId, privateKeyId));

  export const token = async (
    privateKey: string | Buffer,
    issuerId: string,
    privateKeyId: string,
  ): Promise<string> => Promise.resolve(
    jwt.sign({}, privateKey, signOption(issuerId, privateKeyId)),
  );
}

export default JwtGenerator;
