import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { WorkerRole } from '../worker.entity';

export class CreateWorkerDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEnum(WorkerRole)
  role: WorkerRole;
}

