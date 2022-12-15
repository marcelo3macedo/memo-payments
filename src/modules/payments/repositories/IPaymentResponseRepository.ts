import ICreatePaymentResponseDTO from "../dtos/ICreatePaymentResponseDTO";
import PaymentResponse from "../entities/PaymentResponse";

export default interface IPaymentResponseRepository {
  create(data: ICreatePaymentResponseDTO): Promise<PaymentResponse>;
}