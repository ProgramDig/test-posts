const {Schema} = require('mongoose')

const Post = new Schema({
    id:{type: Number, require: true, unique: true},
    title:{type: String, require: true},
    text:{type: String, require: true}
})

module.exports = model('Post', Post)