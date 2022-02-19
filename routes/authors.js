const express = require('express')
const author = require('../models/author')
const router = express.Router()
const Author = require('../models/author')

//Display all authors route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find(searchOptions)
        res.render('authors/index', {
            authors: authors,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')
    }
})

//Add new author route (shows form to add new author)
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new author() })
})

//Create author Route
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name //this body parser functionalty USED to require body-parser npm package (npm i body-parser).  As of Express 4.16 it's bundled with Express
    })
    try {
        const newAuthor = await author.save()
        // res.redirect(`authors/${newAuthor.id}`)
        res.redirect('authors')
    } catch {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating author'
        })
    }
})

module.exports = router