import { inject, injectable } from "tsyringe";
import IPaymentRepository from "@modules/payments/repositories/IPaymentRepository";
import IPaymentResponseRepository from "@modules/payments/repositories/IPaymentResponseRepository";
import { IPaymentProvider } from "@shared/container/providers/PaymentProvider/IPaymentProvider";
import { INotifyProvider } from "@shared/container/providers/NotifyProvider/INotifyProvider";

@injectable()
export default class CreatePaymentUseCases {
    constructor(
        @inject('PaymentRepository')
        private paymentRepository: IPaymentRepository,
        @inject('PaymentResponseRepository')
        private paymentResponseRepository: IPaymentResponseRepository,
        @inject('NotifyProvider')
        private notifyProvider: INotifyProvider,
        @inject('MercadoPagoProvider')
        private mercadoPagoProvider: IPaymentProvider,
    ) {}

    async execute({ application, statement, type, orderId, email, value, callbackUrl }): Promise<void> {
        const payment = await this.paymentRepository.create({
            application,
            statement,
            callbackUrl,
            orderId,
            type,
            email,
            value
        })

        const { id: externalId, qrCode, qrCodeBase64, status, ticketUrl } = await this.mercadoPagoProvider.pix({ statement, email, value })        
        await this.paymentResponseRepository.create({
            paymentId: payment.id,
            externalId,
            qrCode,
            qrCodeBase64,
            status,
            ticketUrl
        })

        await this.notifyProvider.notify({
            id: payment.id,
            callbackUrl,
            qrCode,
            qrCodeBase64,
            status,
            ticketUrl
         })
    }
}