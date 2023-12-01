
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordHelper {
    constructor() {

    }

    hashPassword(password: string): string {
        return bcrypt.hash(password, 10);
    }

    comparePassword(password: string, passwordHash: string): boolean {
        return bcrypt.compare(password, passwordHash);
    }
}