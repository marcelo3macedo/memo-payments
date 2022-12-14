import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { container } from 'tsyringe';
import '@shared/container';
import { Amqp } from '../amqp';

const app = express()
app.use(express.json())

const amqp = container.resolve(Amqp)
amqp.activate()

export { app }