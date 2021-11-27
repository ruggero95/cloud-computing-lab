import { tables } from "./../../constants/sql_tables";
import { connection as knex} from "./../../db/db";
export class ItemRepository{
    static create(){

    }

    static getAll(){
        return knex.select().from(tables.TABLE_ITEMS)        
    }
}