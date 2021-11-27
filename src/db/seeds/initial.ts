import { Knex } from "knex";
import {tables} from "./../../constants/sql_tables"
export async function seed(knex: Knex): Promise<void> {

    await knex(tables.TABLE_ITEMS).del();
    
    // Inserts seed entries
     await knex(tables.TABLE_ITEMS).insert([
        { name: "item1" , price:23,weight:540,data:'2021-12-13 13:23:00'},
        { name: "item2" , price:43,weight:40,data:'2021-12-13 13:23:00'},
        { name: "item3" , price:73,weight:240,data:'2021-12-13 13:23:00'},
        { name: "item4" , price:83,weight:540,data:'2021-12-13 13:23:00'},
        { name: "item5" , price:23,weight:140,data:'2021-12-13 13:23:00'},
        
    ]);
};
