import "@lib/VariableManager";

export default {
    name: process.env.TYPEORM_TYPE,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: process.env.TYPEORM_ENTITIES,
    migrations: process.env.TYPEORM_MIGRATIONS,
    cli_migrationsdir:  process.env.TYPEORM_CLI_MIGRATIONSDIR
}