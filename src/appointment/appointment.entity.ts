import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Worker } from '../worker/worker.entity';
import { Patient } from '../patient/patient.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime')
  time: string;

  @ManyToOne(() => Worker, (w) => w.appointments, { eager: true, onDelete: 'SET NULL' })
  doctor: Worker;

  @ManyToOne(() => Patient, (p) => p.appointments, { eager: true, onDelete: 'SET NULL' })
  patient: Patient;
}
