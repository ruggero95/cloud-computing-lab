import { tables } from "./../../constants/sql_tables";
import { connection as knex} from "./../../db/db";
import dayjs from "dayjs"
export class ItemRepository{
    static create(name:string|number, price:string|number,weight:string|number){
        return knex(tables.TABLE_ITEMS).insert({name:name, price:price, weight:weight, created_at:dayjs().format('YYYY-MM-DD HH:mm:ss')})
    }

    static getById(item_id:number|string){
        return knex.select().from(tables.TABLE_ITEMS).where({id:item_id})
    }

    static getAll(){
        return knex.select().from(tables.TABLE_ITEMS)        
    }
}