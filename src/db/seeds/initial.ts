import { Knex } from "knex";
import {tables} from "./../../constants/sql_tables"
import dayjs from "dayjs"
export async function seed(knex: Knex): Promise<void> {

    //await knex(tables.TABLE_ITEMS).del();
    let tot = await knex(tables.TABLE_ITEMS).count('* as tot')
    // Inserts seed entries
    if(tot[0]['tot']==0){
        await knex(tables.TABLE_ITEMS).insert([
            { name: "item1" , price:23,weight:540,created_at:dayjs().format('YYYY-MM-DD HH:mm:ss')},
            { name: "item2" , price:43,weight:40,created_at:dayjs().format('YYYY-MM-DD HH:mm:ss')},
            { name: "item3" , price:73,weight:240,created_at:dayjs().format('YYYY-MM-DD HH:mm:ss')},
            { name: "item4" , price:83,weight:540,created_at:dayjs().format('YYYY-MM-DD HH:mm:ss')},
            { name: "item5" , price:23,weight:140,created_at:dayjs().format('YYYY-MM-DD HH:mm:ss')},
            
        ]);
    }
     
};
