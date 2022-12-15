import { connect, Message } from "amqplib";
import { IQueueProvider } from "../IQueueProvider";
import queue from "@config/queue";
import { Console } from "winston/lib/winston/transports";

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
            if (this.isJSON(message.content)) {
                callback(JSON.parse(message.content));
            }            
            this.channel.ack(message)
        })
    }

    isJSON(str) {
        try {
            return (JSON.parse(str) && !!str);
        } catch (e) {
            return false;
        }
    }
}

export { RabbitMQProvider };