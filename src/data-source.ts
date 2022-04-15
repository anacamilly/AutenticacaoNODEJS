import { DataSource } from 'typeorm';
import { User } from "./models/User";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "#MILLA2003",
    database: "simpleauth",
    synchronize: false,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: ['migrations'],
});