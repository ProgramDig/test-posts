const {validationResult} = require("express-validator");
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
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'Некоректно введені дані.', errors: errors.array()})
            }

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
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'Некоректно введені дані.', errors: errors.array()})
            }

            const {id, title, text} = req.body
            const post = await Post.update({id}, {title, text})
            if(!post) {
               return res.status(400).json({message: 'Такого поста не існує.'})
            }
            return res.status(200).json({message: `Пост id: ${id} оновлено.`})
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({message: 'Помилка при створенні поста.'})
        }
    }
    async deletePost(req, res) {
        try {
            const {id} = req.body
            const post = await Post.remove({id})
            if(!post) {
                return res.status(400).json({message: 'Такого поста не існує.'})
            }
            return res.status(200).json({message: `Пост id: ${id} видалено.`})
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({message: 'Помилка при поверненні списка користувачів.'})
        }
    }
}

module.exports = new PostController()