import { Router } from 'express'

import shortener from './routes/shortener'

const router = Router()

router.use('/shortener', shortener)

export default router
