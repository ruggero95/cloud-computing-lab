import * as express from "express"
export const router = express.Router()
import {BadRequestResponse, SuccessResponse} from "./../../core/apiResponse"
import { ItemRepository } from "./item.repository"
router.get('/', async (req,res,next)=>{
    try{
        const items = await ItemRepository.getAll()
        return new SuccessResponse('Items',items).send(res)
    }catch(e){
        next(e)
    }
})

router.get('/:id', async (req,res,next)=>{
    try{
        const id = req.params.id
        const item = await ItemRepository.getById(id)
        return new SuccessResponse('Item',item).send(res)
    }catch(e){
        next(e)
    }
})


router.post('/add', async (req,res,next)=>{
    try{
        
        const name = req.body.name
        const price = req.body.price
        const weight = req.body.weight
       
        if(!name || !price || !weight){
            return new BadRequestResponse().send(res)
        }
        const item = await ItemRepository.create(name, price, weight)
        return new SuccessResponse('Item',{item_id:item[0]}).send(res)
    }catch(e){
        next(e)
    }
})


