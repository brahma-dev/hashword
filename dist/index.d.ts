export declare class Hashword {
    saltRounds: number;
    constructor(saltRounds?: number);
    hash(password: string): Promise<string>;
    check(password: string, hash: string): Promise<boolean>;
    private g;
    generate(length?: 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map