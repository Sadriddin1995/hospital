import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Patient } from '../patient/patient.entity';
import { Worker } from '../worker/worker.entity';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  address: string;

  @OneToMany(() => Patient, (p) => p.hospital)
  patients: Patient[];

  @OneToMany(() => Worker, (w) => w.hospital)
  workers: Worker[];
}
