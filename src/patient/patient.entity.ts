import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Hospital } from '../hospital/hospital.entity';
import { Appointment } from '../appointment/appointment.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  age: number;

  @ManyToOne(() => Hospital, (h) => h.patients, { onDelete: 'SET NULL' })
  hospital: Hospital;

  @OneToMany(() => Appointment, (a) => a.patient)
  appointments: Appointment[];
}
