import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorSpecialty } from '../entities/doctor-specialty.entity';

@Injectable()
export class DoctorSpecialtyService {
  constructor(
    @InjectRepository(DoctorSpecialty)
    private readonly specialtyRepo: Repository<DoctorSpecialty>,
  ) {}

  async getAllSpecialties() {
    return this.specialtyRepo.find({ order: { name: 'ASC' } });
  }

  async createSpecialty(name: string) {
    const specialty = this.specialtyRepo.create({ name });
    return this.specialtyRepo.save(specialty);
  }

  async updateSpecialty(id: number, name: string) {
    const specialty = await this.specialtyRepo.findOne({ where: { id } });
    if (!specialty) throw new NotFoundException('Specialty not found');

    specialty.name = name;
    return this.specialtyRepo.save(specialty);
  }

  async deleteSpecialty(id: number) {
    const specialty = await this.specialtyRepo.findOne({ where: { id } });
    if (!specialty) throw new NotFoundException('Specialty not found');

    await this.specialtyRepo.delete(id);
    return { message: 'Specialty deleted successfully' };
  }
}
