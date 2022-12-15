import IPixPaymentProviderDTO from "./dtos/IPixPaymentProviderDTO";
import IPixPaymentResponseDTO from "./dtos/IPixPaymentResponseDTO";

interface IPaymentProvider {
    pix(data: IPixPaymentProviderDTO): Promise<IPixPaymentResponseDTO>;
}

export { IPaymentProvider };