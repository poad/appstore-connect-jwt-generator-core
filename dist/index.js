"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGenerator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JwtGenerator;
(function (JwtGenerator) {
    const signOption = (issuerId, privateKeyId) => ({
        algorithm: 'ES256',
        keyid: privateKeyId,
        audience: 'appstoreconnect-v1',
        expiresIn: 1200,
        issuer: issuerId,
    });
    JwtGenerator.tokenSync = (privateKey, issuerId, privateKeyId) => jsonwebtoken_1.default.sign({}, privateKey, signOption(issuerId, privateKeyId));
    JwtGenerator.token = async (privateKey, issuerId, privateKeyId) => Promise.resolve(jsonwebtoken_1.default.sign({}, privateKey, signOption(issuerId, privateKeyId)));
})(JwtGenerator = exports.JwtGenerator || (exports.JwtGenerator = {}));
exports.default = JwtGenerator;
//# sourceMappingURL=index.js.map