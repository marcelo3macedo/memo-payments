export default interface ICreatePaymentDTO {
    application: string;
    statement: string;
    type: string;
    email: string;
    orderId: string;
    value: number;
    callbackUrl: string;
 }