import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    username: "sa",
    password: "P@ssword1234",
    database: "easypos",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
    extra: {
        trustServerCertificate: true,
      }
})
