const {check, oneOf} = require('express-validator')
const MIN = 5
const postValidator = oneOf([
    check('title', `Поле "title" має містити мінімум ${MIN} символів.`).isLength({min: MIN}),
    check('text', `Поле "text" має містити мінімум ${MIN} символів.`).isLength({min: MIN})
])
module.exports = {postValidator}