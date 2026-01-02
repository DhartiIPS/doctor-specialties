import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorSpecialty } from '../entities/doctor-specialty.entity';
import { DoctorSpecialtyService } from './doctor-specialties.service';
import { DoctorSpecialtyController } from './doctor-specialties.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DoctorSpecialty]), // 🔹 important
  ],
  providers: [DoctorSpecialtyService],
  controllers: [DoctorSpecialtyController],
  exports: [DoctorSpecialtyService],
})
export class DoctorSpecialtyModule {}
