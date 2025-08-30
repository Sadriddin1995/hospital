export class CreateAppointmentDto {
  time: string; // ISO datetime string
  doctorId: number;
  patientId: number;
}
