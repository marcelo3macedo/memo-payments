import { app } from './app'
import server from '@config/server'
import logger from '@lib/LogManager'

const port = server.port

app.listen(port, () => logger.info(`Server running on port ${port}`))