import { connect, Message } from "amqplib";
import { IQueueProvider } from "../IQueueProvider";
import queue from "@config/queue";

class RabbitMQProvider implements IQueueProvider {
    private conn;
    private channel;

    async start(): Promise<void> {
        this.conn = await connect(queue.url);
        this.channel = await this.conn.createChannel()        
    }

    async consume(queue: string, callback: (message: Message) => void) {
        this.channel.assertQueue(queue, {
            durable: false
        })
        
        return this.channel.consume(queue, (message) => {
            callback(JSON.parse(message.content));
            this.channel.ack(message)
        })
    }
}

export { RabbitMQProvider };