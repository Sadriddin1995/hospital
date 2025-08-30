import { IsEnum, IsOptional, IsString } from 'class-validator';
import { WorkerRole } from '../worker.entity';

export class UpdateWorkerDto {
  @IsString()
  @IsOptional()
  fullName?: string;

  @IsEnum(WorkerRole)
  @IsOptional()
  role?: WorkerRole;
}
