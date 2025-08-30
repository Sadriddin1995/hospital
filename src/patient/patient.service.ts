import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';
import { Hospital } from '../hospital/hospital.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private repo: Repository<Patient>,
    @InjectRepository(Hospital) private hospRepo: Repository<Hospital>
  ) {}

  async create(dto: CreatePatientDto) {
    const p = this.repo.create({ fullName: dto.fullName, age: dto.age });
    if (dto.hospitalId) {
      p.hospital = await this.hospRepo.findOneBy({ id: dto.hospitalId });
    }
    return this.repo.save(p);
  }

  findAll() {
    return this.repo.find({ relations: ['hospital'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['hospital'] });
  }

  async update(id: number, dto: UpdatePatientDto) {
    const p = await this.repo.findOneBy({ id });
    if (!p) return null;
    if (dto.fullName) p.fullName = dto.fullName;
    if (dto.age !== undefined) p.age = dto.age;
    if (dto.hospitalId !== undefined) {
      p.hospital = await this.hospRepo.findOneBy({ id: dto.hospitalId });
    }
    return this.repo.save(p);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
