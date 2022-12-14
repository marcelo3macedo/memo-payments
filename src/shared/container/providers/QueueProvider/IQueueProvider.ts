import { Message } from "amqplib";

interface IQueueProvider {
    start(): Promise<void>;
    consume(queue: string, callback: (message: Message) => void);
}

export { IQueueProvider };