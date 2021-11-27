import * as express from "express"
//import {routerHealthPDF} from "./pdf/pdfHealth/pdfHealth.routes"
export const mainRouter = express.Router()
import {router as itemRouter} from "./item/item.controller"
//mainRouter.use('/pdf', Auth.authenticate, routerHealthPDF,pdfRouter, routerInformantMebmerPDF, routerSubscriptionPDF, routerInterventiPDF )
mainRouter.use('/items',itemRouter)
//TODO da rimuovere, solo per sviluppo
//mainRouter.use('/pdf-temp', routerHealthPDF,pdfRouter, routerInformantMebmerPDF, routerSubscriptionPDF)


