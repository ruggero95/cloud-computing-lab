import * as express from "express"
export const router = express.Router()
import {SuccessResponse} from "./../../core/apiResponse"
import { ItemRepository } from "./item.repository"
router.get('/', (req,res,next)=>{
    try{
        const items = ItemRepository.getAll()
        return new SuccessResponse('Items',items).send(res)
    }catch(e){
        next(e)
    }
})