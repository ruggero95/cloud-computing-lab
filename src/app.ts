import express from "express"
import {Request, Response,NextFunction} from "express"
import helmet from "helmet"
import {ErrorResponse, InternalError, NotFoundError} from "./core/errorResponse"
import * as dotenv from "dotenv"
dotenv.config({path:"./../.env"})
import {logger, myStream } from "./core/logger"
import { mainRouter } from "./app/index"
import  morgan from "morgan"

process.on('uncaughtException', (e) => {
  console.log('entro uncaught Exception')
  console.log(e)
  logger.error(e);
});

export const app = express()
app.use(morgan('tiny',{stream:myStream}))
app.use(helmet())
app.use(express.json())

app.get('/', (req, res, next) => {
    return res.status(200).json({error:false,message:'Running'});
});


//import api here
app.use(mainRouter)
// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFoundError()));

app.use((err:any, req:Request, res:Response, next:NextFunction)=>{  
  if(err instanceof ErrorResponse){
    ErrorResponse.handle(err, res)
  }else{
    if (process.env.NODE_ENV === 'development') {
      logger.error(err.stack.toString());
      return res.status(500).send(err.message);
    }
    ErrorResponse.handle(new InternalError(), res);
  }
})
