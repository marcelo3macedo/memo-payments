import { container } from 'tsyringe';
import './providers';

import IPaymentRepository from '@modules/payments/repositories/IPaymentRepository';
import { PaymentRepository } from "@modules/payments/repositories/implementations/PaymentRepository";

import IPaymentResponseRepository from '@modules/payments/repositories/IPaymentResponseRepository';
import { PaymentResponseRepository } from "@modules/payments/repositories/implementations/PaymentResponseRepository";

container.registerSingleton<IPaymentRepository>('PaymentRepository', PaymentRepository);
container.registerSingleton<IPaymentResponseRepository>('PaymentResponseRepository', PaymentResponseRepository);