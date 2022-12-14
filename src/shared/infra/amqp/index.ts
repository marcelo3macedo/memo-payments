import queue from "@config/queue";
import { QUEUE_PAYMENTS } from "@constants/queue";
import { CreatePaymentController } from "@modules/payments/useCases/createPayment/CreatePaymentController";
import { IQueueProvider } from "@shared/container/providers/QueueProvider/IQueueProvider";
import { inject, injectable } from "tsyringe";

@injectable()
class Amqp {
    constructor(
        @inject('RabbitMQProvider')
        private rabbitMQProvider: IQueueProvider
    ) {}

    async activate() {
        await this.rabbitMQProvider.start()
        return this.consume()
    }

    async consume() {
        queue.availables.map(q => {
            const actionQueue = this.getActionByQueueName(q)
            if (!actionQueue) {
                return
            }
            this.rabbitMQProvider.consume(q, actionQueue)
        })
    }

    getActionByQueueName(queue) {
        return queue === QUEUE_PAYMENTS ? 
            CreatePaymentController.handle : null
    } 
}

export { Amqp };