import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './appointment.entity';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { Worker } from '../worker/worker.entity';
import { Patient } from '../patient/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment, Worker, Patient])],
  providers: [AppointmentService],
  controllers: [AppointmentController]
})
export class AppointmentModule {}
