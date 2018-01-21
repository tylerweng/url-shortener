import { Router } from 'express'
import bodyParser from 'body-parser'

import controller from '../shortener/controller'

const router = Router()

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
  console.log(`GET req to /`)
  controller.index(req, res)
})

router.post('/', jsonParser, (req, res) => {
  console.log(`POST req to /`)
  controller.post(req, res)
})

export default router