import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';
import { Worker, WorkerRole } from '../worker/worker.entity';
import { Patient } from '../patient/patient.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment) private repo: Repository<Appointment>,
    @InjectRepository(Worker) private workerRepo: Repository<Worker>,
    @InjectRepository(Patient) private patientRepo: Repository<Patient>
  ) {}

  async create(dto: CreateAppointmentDto) {
    const doctor = await this.workerRepo.findOneBy({ id: dto.doctorId });
    if (!doctor) throw new BadRequestException('Doctor not found');
    if (doctor.role !== WorkerRole.DOCTOR) throw new BadRequestException('Worker is not a DOCTOR');

    const patient = await this.patientRepo.findOneBy({ id: dto.patientId });
    if (!patient) throw new BadRequestException('Patient not found');

    const a = this.repo.create({ time: dto.time, doctor, patient });
    return this.repo.save(a);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateAppointmentDto) {
    const a = await this.repo.findOneBy({ id });
    if (!a) return null;
    if (dto.time) a.time = dto.time;
    if (dto.doctorId) {
      const doctor = await this.workerRepo.findOneBy({ id: dto.doctorId });
      if (!doctor) throw new BadRequestException('Doctor not found');
      if (doctor.role !== WorkerRole.DOCTOR) throw new BadRequestException('Worker is not a DOCTOR');
      a.doctor = doctor;
    }
    if (dto.patientId) {
      const patient = await this.patientRepo.findOneBy({ id: dto.patientId });
      if (!patient) throw new BadRequestException('Patient not found');
      a.patient = patient;
    }
    return this.repo.save(a);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
