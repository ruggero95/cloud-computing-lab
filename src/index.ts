import { logger } from "./core/logger"
import {app} from "./app"
const PORT = 4002


app.listen(PORT,()=>{
    logger.verbose(`Listening s on ${PORT}`)
})