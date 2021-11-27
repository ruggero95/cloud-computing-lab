const dotenv = require('dotenv')
dotenv.config({path:'./../.env'})
require('ts-node/register')
//import non in es6 per compatibilita con knex
export default {
    development:{
        client:'mysql2',
        connection:{
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        },
        migrations:{
            directory:'./db/migrations'
        },
        seeds:{
           directory:'./db/seeds'
        }
    }
}