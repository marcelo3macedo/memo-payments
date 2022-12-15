export default interface ICreatePaymentDTO {
    application: string;
    type: string;
    orderId: string;
    value: number;
    callbackUrl: string;
 }