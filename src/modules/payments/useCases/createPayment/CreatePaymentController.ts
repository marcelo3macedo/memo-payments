import { container } from 'tsyringe';
import logger from '@lib/LogManager';
import CreatePaymentUseCases from './CreatePaymentUseCases';

export class CreatePaymentController {
  static async handle(content) {
    try {
        const createPaymentUseCases = container.resolve(CreatePaymentUseCases)
        createPaymentUseCases.execute({})
    } catch (error) {
      logger.error(`[CreatePaymentController] ${error.message}`)
    }
  }
}