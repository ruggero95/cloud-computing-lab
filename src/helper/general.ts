export const helpers = {
    softDelete:(table)=> {
        //when nul or 0000-00-00 is not deleted
        table.dateTime('deleted_at')
    },
    stdFields:(table)=> {
        table.dateTime('created_at')
        table.dateTime('modified_at')
    },
    primaryKeyId:(table)=>{
        table.increments('id').notNullable()
    }

}