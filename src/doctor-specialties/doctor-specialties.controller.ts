import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DoctorSpecialtyService } from './doctor-specialties.service';

@Controller('doctor-specialties')
export class DoctorSpecialtyController {
  constructor(private readonly specialtyService: DoctorSpecialtyService) {}

  @MessagePattern({ cmd: 'get_all_specialties' })
  async getAll() {
    return this.specialtyService.getAllSpecialties();
  }

  @MessagePattern({ cmd: 'create_specialty' })
  async create(@Payload() name: string) {
    return this.specialtyService.createSpecialty(name);
  }

  @MessagePattern({ cmd: 'update_specialty' })
  async update(@Payload() data: { id: number; name: string }) {
    return this.specialtyService.updateSpecialty(data.id, data.name);
  }

  @MessagePattern({ cmd: 'delete_specialty' })
  async delete(@Payload() id: number) {
    return this.specialtyService.deleteSpecialty(id);
  }
}
