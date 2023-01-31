const Router = require('express')
const postController = require('../controllers/post-controller')
const {postValidator} = require("../middleware/post-valid-middleware");
const router = new Router()

router.get('/', postController.getPost)
router.post('/', postValidator,  postController.createPost)
router.put('/',postValidator, postController.updatePost)
router.delete('/', postController.deletePost)

module.exports = router