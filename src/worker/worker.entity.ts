import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Hospital } from '../hospital/hospital.entity';
import { Appointment } from '../appointment/appointment.entity';

export enum WorkerRole {
  DOCTOR = 'DOCTOR',
  GUARD = 'GUARD',
  NURSE = 'NURSE',
}

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({
    type: 'text',
    enum: WorkerRole,
  })
  role: WorkerRole;

 
  @ManyToOne(() => Hospital, (h) => h.workers, { onDelete: 'SET NULL' })
  hospital: Hospital;

  
  @OneToMany(() => Appointment, (a) => a.doctor)
  appointments: Appointment[];
}
