import { Repository } from 'typeorm';
import AppDataSource from '@shared/infra/typeorm';

import Payment from '@modules/payments/entities/Payment';
import IPaymentRepository from '../IPaymentRepository';

export class PaymentRepository implements IPaymentRepository {
  private repository: Repository<Payment>;

  constructor() {
    this.repository = AppDataSource.getRepository(Payment);
  }

  async create({ application, type, orderId, value, callbackUrl }): Promise<Payment> {
    const payment = this.repository.create({
        application, 
        type, 
        orderId, 
        value, 
        callbackUrl
    });

    return this.repository.save(payment);
  }
}