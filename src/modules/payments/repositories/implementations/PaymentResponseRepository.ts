import { Repository } from 'typeorm';
import AppDataSource from '@shared/infra/typeorm';

import PaymentResponse from '@modules/payments/entities/PaymentResponse';
import IPaymentResponseRepository from '../IPaymentResponseRepository';

export class PaymentResponseRepository implements IPaymentResponseRepository {
  private repository: Repository<PaymentResponse>;

  constructor() {
    this.repository = AppDataSource.getRepository(PaymentResponse);
  }

  async create({ paymentId, externalId, status, qrCode, ticketUrl, qrCodeBase64 }): Promise<PaymentResponse> {
    const paymentResponse = this.repository.create({
      paymentId, externalId, status, qrCode, ticketUrl, qrCodeBase64
    });

    return this.repository.save(paymentResponse);
  }
}