const uuid = require('uuid')
const Post = require('../models/post-model')

class PostController {
    async getPost(req, res) {
        try {
            const posts = await Post.find()
            return res.status(200).json(posts)
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({message: 'Помилка при поверненні списка постів.'})
        }
    }
    async createPost(req, res) {
        try {
            const {title, text} = req.body
            const id = uuid.v4()
            const post = await Post.create({id, title, text})
            return res.status(200).json(post)
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({message: 'Помилка при створенні поста.'})
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