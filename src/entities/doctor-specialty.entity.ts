import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('doctor_specialties')
export class DoctorSpecialty {
  @PrimaryGeneratedColumn()
  specialty_id: number;

  @Column()
  name: string; 
}