import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorSpecialtyModule } from './doctor-specialties/doctor-specialties.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'doctor_specialties',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 🔹 auto-load all entities
      synchronize: false,
      logging: false,
      autoLoadEntities: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET') || 'defaultsecret',
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRES_IN') || '1d',
        },
      }),
    }),
    DoctorSpecialtyModule, // 🔹 Import the module
  ],
  controllers: [AppController],
  providers: [AppService], // ❌ Remove DoctorSpecialtyService from here
})
export class AppModule {}
