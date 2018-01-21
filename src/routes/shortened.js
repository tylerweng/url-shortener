import { Router } from 'express'

import controller from '../shortener/controller'

const router = Router()

router.get('/:_id', (req, res) => {
  console.log(`GET req to /${req.params._id}`)
  controller.redirect(req, res)
})

export default router