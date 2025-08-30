import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Worker, WorkerRole } from './worker.entity';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';

@Injectable()
export class WorkerService {
  constructor(
    @InjectRepository(Worker)
    private readonly repo: Repository<Worker>,
  ) {}

  async create(dto: CreateWorkerDto) {
    const w = this.repo.create({
      fullName: dto.fullName,
      role: dto.role as WorkerRole, // ✅ enum cast
    });
    return this.repo.save(w);
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateWorkerDto) {
    const w = await this.repo.findOneBy({ id });
    if (!w) return null;

    if (dto.fullName) w.fullName = dto.fullName;
    if (dto.role) w.role = dto.role as WorkerRole; // ✅ enum cast

    return this.repo.save(w);
  }

  async remove(id: number) {
    return this.repo.delete(id);
  }
}
