const fs = require('fs');
const jwt = require('jsonwebtoken');
const {tokenSync} = require('../../lib/index.cjs');

describe('Generate JWT for App Store Connect API', () => {
  const PRIVATE_KEY_FILE_PATH = process.env.APPSTORE_PRIVATE_KEY_FILE_PATH || './privateKey.p8';
  const APPSTORE_KEY_ID = process.env.APPSTORE_KEY_ID;
  const APPSTORE_ISSUER_ID = process.env.APPSTORE_ISSUER_ID;

  test('should generate.', (): void => {
    const cert = fs.readFileSync(PRIVATE_KEY_FILE_PATH, { flag: 'r' });
    const token = tokenSync(cert, APPSTORE_ISSUER_ID!, APPSTORE_KEY_ID!);
    expect(token).not.toBeUndefined();
    expect(token).not.toBeNull();
    const decoded = jwt.decode(token);
    expect(decoded).not.toBeUndefined();
    expect(decoded).not.toBeNull();
  });


});
