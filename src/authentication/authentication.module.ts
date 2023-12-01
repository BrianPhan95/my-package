import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './authentication-guard';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: 'ita-secret-key',
            signOptions: { expiresIn: '1d' },
        })],
    providers: [AuthGuard],
    exports: [AuthGuard],
})
export class AuthenticationModule { }