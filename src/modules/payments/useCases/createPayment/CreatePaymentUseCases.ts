import { inject, injectable } from "tsyringe";

@injectable()
export default class CreatePaymentUseCases {
    async execute({ application, type, orderId, value, callbackUrl }): Promise<void> {
        
    }
}