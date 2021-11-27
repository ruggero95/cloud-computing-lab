import { Knex } from "knex";
import {tables} from "./../../constants/sql_tables"
import {helpers} from "./../../helper/general"
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tables.TABLE_ITEMS,(table)=>{
        helpers.primaryKeyId(table)
        table.string('name',255).notNullable()
        table.decimal('price').notNullable()
        table.decimal('weight').notNullable()
        table.dateTime('date').notNullable()
        helpers.softDelete(table)
        helpers.stdFields(table)        
    })

}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
            .dropTableIfExists(tables.TABLE_ITEMS).dropTableIfExists(tables.TABLE_ITEMS_CATEGORY).dropTableIfExists(tables.TABLE_CATEGORY)
            
}

