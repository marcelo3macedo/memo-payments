import IPaymentRepository from "@modules/payments/repositories/IPaymentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export default class CreatePaymentUseCases {
    constructor(
        @inject('PaymentRepository')
        private paymentRepository: IPaymentRepository,
    ) {}

    async execute({ application, type, orderId, value, callbackUrl }): Promise<void> {
        const payment = await this.paymentRepository.create({
            application,
            callbackUrl,
            orderId,
            type,
            value
        })
    }
}