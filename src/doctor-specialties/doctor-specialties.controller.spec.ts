import { Test, TestingModule } from '@nestjs/testing';
import { DoctorSpecialtyController } from './doctor-specialties.controller';

describe('DoctorSpecialtyController', () => {
  let controller: DoctorSpecialtyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorSpecialtyController],
    }).compile();

    controller = module.get<DoctorSpecialtyController>(DoctorSpecialtyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
