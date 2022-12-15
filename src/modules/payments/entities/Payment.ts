import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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