import ICreatePaymentDTO from "../dtos/ICreatePaymentDTO";
import Payment from "../entities/Payment";

export default interface IPaymentRepository {
  create(data: ICreatePaymentDTO): Promise<Payment>;
}