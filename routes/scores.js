import { Router } from 'express'
const router = Router()
import * as scoresCtrl from '../controllers/scores.js'

router.get('/', scoresCtrl.index)
router.post('/', scoresCtrl.create)


export { router }