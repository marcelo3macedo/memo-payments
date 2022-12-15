import { DataSource } from 'typeorm';
import databases from '@config/databases';

const AppDataSource = new DataSource({
    type: "mysql",
    name: databases.name,
    host: databases.host,
    port: databases.port,
    username: databases.username,
    password: databases.password,
    database: databases.database,
    entities: [ databases.entities ],
    migrations: [ databases.migrations ],
})

AppDataSource.initialize()

export default AppDataSource