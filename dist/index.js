"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hashword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class Hashword {
    constructor(saltRounds) {
        if (saltRounds && isNaN(saltRounds)) {
            throw new Error("saltRounds has be a number");
        }
        else if (saltRounds && saltRounds < 8) {
            throw new Error("saltRounds has be atleast 8");
        }
        this.saltRounds = saltRounds || 10;
    }
    async hash(password) {
        return await bcrypt_1.default.hash(password, this.saltRounds);
    }
    async check(password, hash) {
        return await bcrypt_1.default.compare(password, hash);
    }
    g(l) {
        const c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let p = "";
        for (let i = 0; i < l; i++) {
            p += c.charAt(Math.random() * 62);
        }
        return p;
    }
    async generate(length) {
        const l = length || 12;
        if (l < 8 || l > 24) {
            throw new Error("length should be from 8 to 24");
        }
        return this.g(l);
    }
}
exports.Hashword = Hashword;
//# sourceMappingURL=index.js.map