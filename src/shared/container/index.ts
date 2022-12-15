import { container } from 'tsyringe';
import './providers';

import IPaymentRepository from '@modules/payments/repositories/IPaymentRepository';
import { PaymentRepository } from "@modules/payments/repositories/implementations/PaymentRepository";

container.registerSingleton<IPaymentRepository>('PaymentRepository', PaymentRepository);