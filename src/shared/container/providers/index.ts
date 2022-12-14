import { container } from "tsyringe";

import { RabbitMQProvider } from "./QueueProvider/implementations/RabbitMQProvider";
import { IQueueProvider } from "./QueueProvider/IQueueProvider";

container.registerSingleton<IQueueProvider>(
    "RabbitMQProvider",
    RabbitMQProvider
);