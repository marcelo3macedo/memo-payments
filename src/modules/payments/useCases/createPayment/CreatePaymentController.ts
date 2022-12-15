import { container } from 'tsyringe';
import logger from '@lib/LogManager';
import CreatePaymentUseCases from './CreatePaymentUseCases';

export class CreatePaymentController {
  static async handle({ application, type, orderId, value, callbackUrl }) {
    try {
      const createPaymentUseCases = container.resolve(CreatePaymentUseCases)
      createPaymentUseCases.execute({ application, type, orderId, value, callbackUrl })
    } catch (error) {
      logger.error(`[CreatePaymentController] ${error.message}`)
    }
  }
}