import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { Hospital } from '../hospital/hospital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient, Hospital])],
  providers: [PatientService],
  controllers: [PatientController]
})
export class PatientModule {}
