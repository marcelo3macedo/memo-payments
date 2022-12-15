export default interface ICreatePaymentResponseDTO {
    paymentId: string;
    externalId: string;
    status: string;
    qrCode: string;
    ticketUrl: string;
    qrCodeBase64: string;
 }