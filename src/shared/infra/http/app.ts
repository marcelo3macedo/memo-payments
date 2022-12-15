import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { container } from 'tsyringe';

import { Amqp } from '../amqp';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express()
app.use(express.json())

const amqp = container.resolve(Amqp)
amqp.activate()

export { app }