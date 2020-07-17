import bcrypt from "bcrypt";
export class Hashword {
	saltRounds!: number;
	constructor(saltRounds?: number) {
		if (saltRounds && isNaN(saltRounds)) {
			throw new Error("saltRounds has be a number");
		} else if (saltRounds && saltRounds < 8) {
			throw new Error("saltRounds has be atleast 8");
		}
		this.saltRounds = saltRounds || 10;
	}

	async hash(password: string) {
		return await bcrypt.hash(password, this.saltRounds);
	}

	async check(password: string, hash: string) {
		return await bcrypt.compare(password, hash);
	}

	private g(l: number) {
		const c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let p = "";
		for (let i = 0; i < l; i++) {
			p += c.charAt(Math.random() * 62);
		}
		return p;
	}

	async generate(
		length?: 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
	) {
		const l = length || 12;
		if (l < 8 || l > 24) {
			throw new Error("length should be from 8 to 24");
		}
		return this.g(l);
	}
}
