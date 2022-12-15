import { container } from "tsyringe";

import { RabbitMQProvider } from "./QueueProvider/implementations/RabbitMQProvider";
import { IQueueProvider } from "./QueueProvider/IQueueProvider";

import { MercadoPagoProvider } from "./PaymentProvider/implementations/MercadoPagoProvider";
import { IPaymentProvider } from "./PaymentProvider/IPaymentProvider";

container.registerSingleton<IQueueProvider>(
    "RabbitMQProvider",
    RabbitMQProvider
);

container.registerSingleton<IPaymentProvider>(
    "MercadoPagoProvider",
    MercadoPagoProvider
);