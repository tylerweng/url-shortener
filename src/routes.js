import { Router } from 'express'

import shortened from './routes/shortened'
import shortener from './routes/shortener'

const router = Router()

router.use('/', shortened)
router.use('/api', shortener)

export default router
