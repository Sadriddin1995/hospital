import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from './worker.entity';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';
import { Hospital } from '../hospital/hospital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Worker, Hospital])],
  providers: [WorkerService],
  controllers: [WorkerController]
})
export class WorkerModule {}
