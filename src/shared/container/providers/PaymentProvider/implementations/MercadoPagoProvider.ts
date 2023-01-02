import axios from "axios";
import IPixPaymentResponseDTO from "../dtos/IPixPaymentResponseDTO";
import { IPaymentProvider } from "../IPaymentProvider";
import payment from "@config/payment";
import { PAYMENT_PIX, PAYMENT_PIX_TYPE_CUSTOMER, PAYMENT_PIX_TYPE_INDIVIDUAL } from "@constants/payments";

class MercadoPagoProvider implements IPaymentProvider {
    async pix({ statement, email, value }): Promise<IPixPaymentResponseDTO> {
        const { endpoint, token } = payment || {}
        const optRequest = {
            method: 'POST',
            url: endpoint,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: { 
                payer: {
                    entity_type: PAYMENT_PIX_TYPE_INDIVIDUAL,
                    type: PAYMENT_PIX_TYPE_CUSTOMER,
                    email: email,
                    identification: {}
                },
                payment_method_id: PAYMENT_PIX,
                statement_descriptor: statement,
                transaction_amount: parseFloat(value)
            }
        }

        const response = await axios.request(optRequest)
        if (response.status !== 201) {
            return
        }

        const { id, status, point_of_interaction } = response.data
        return {
            id,
            qrCode: point_of_interaction?.transaction_data?.qr_code,
            status,
            ticketUrl: point_of_interaction?.transaction_data?.ticket_url,
            qrCodeBase64: point_of_interaction?.transaction_data?.qr_code_base64
        }
    }
}

export { MercadoPagoProvider };