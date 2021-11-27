import {knex} from "knex"
import knexConfig from "./../knexfile"
import {Model} from "objection"


export const connection = knex(knexConfig[process.env.NODE_ENV||"development"])
Model.knex(connection)
