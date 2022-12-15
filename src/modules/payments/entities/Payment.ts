import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn, DeleteDateColumn } from 'typeorm';

@Entity('payments')
export default class Payment {
  @PrimaryColumn()
  id: string;

  @Column()
  application: string;

  @Column()
  type: string;

  @Column()
  orderId: string;

  @Column()
  value: number;

  @Column()
  callbackUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor() {
    this.id = uuid();
  }
}