export default {
    DATABASE_TYPE: process.env.DATABASE_TYPE || 'postgres',
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_PORT: parseInt(process.env.DATABASE_PORT, 10) || 1234,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME || 'test',
}