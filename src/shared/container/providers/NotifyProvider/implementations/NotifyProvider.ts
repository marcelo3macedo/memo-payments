import axios from "axios";
import { INotifyProvider } from "../INotifyProvider";

class NotifyProvider implements INotifyProvider {
    async notify({ id, callbackUrl, qrCode, qrCodeBase64, status, ticketUrl }): Promise<void> {
        const optRequest = {
            method: 'POST',
            url: callbackUrl,
            headers: {
                'Content-Type': 'application/json',
            },
            data: { 
                id,
                qrCode,
                qrCodeBase64,
                status,
                ticketUrl
            }
        }

        await axios.request(optRequest)
    }
}

export { NotifyProvider };