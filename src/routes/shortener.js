import { Router } from 'express'
import bodyParser from 'body-parser'

import controller from '../shortener/controller'

const router = Router()

// create application/json parser
const jsonParser = bodyParser.json()

router.get('/', (req, res) => {
  console.log(`GET req to /`)
  controller.index(req, res)
})

router.get('/_id/:_id', (req, res) => {
  console.log(`GET req to /${req.params._id}`)
  controller.redirect(req, res)
})

router.get('/full_url/:full_url', (req, res) => {
  console.log(`GET req to /${req.params.full_url}`)
  controller.findAllByFullUrl(req, res)
})

router.post('/', jsonParser, (req, res) => {
  console.log(`POST req to /`)
  controller.post(req, res)
})

export default router