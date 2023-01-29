const Router = require('express')
const postController = require('../controllers/post-controller')
const router = new Router()

router.get('/', postController.getPost)
router.post('/', postController.getPost)
router.pop('/', postController.getPost)
router.delete('/', postController.getPost)

module.exports = router