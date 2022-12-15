import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn, DeleteDateColumn } from 'typeorm';

@Entity('payment_responses')
export default class PaymentResponse {
  @PrimaryColumn()
  id: string;

  @Column()
  paymentId: string;

  @Column()
  externalId: string;

  @Column()
  status: string;

  @Column()
  qrCode: string;

  @Column()
  ticketUrl: string;

  @Column()
  qrCodeBase64: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor() {
    this.id = uuid();
  }
}