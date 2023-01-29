const Post = require('../models/post-model')

class PostController {
    async getPost(req, res) {
        try {
            const posts = await Post.find()
            return res.status(200).json()
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
    async createPost(req, res) {
        try {
            const {title, text} = req.body
            const posts = await Post.find()
            return res.status(200).json()
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
    async updatePost(req, res) {
        try {
            const posts = await Post.find()
            return res.status(200).json()
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
    async deletePost(req, res) {
        try {
            const posts = await Post.find()
            return res.status(200).json()
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
}

module.exports = new PostController()