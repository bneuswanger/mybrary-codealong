const express = require('express')
const res = require('express/lib/response')
// const author = require('../models/author')
const router = express.Router()
const Author = require('../models/author')
const Book = require('../models/book')

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
    } catch (e) {
        res.redirect('/')
        console.log(e)
    }
})

//Add new author route (shows form to add new author)
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

//Create author Route
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name //this body parser functionalty USED to require body-parser npm package (npm i body-parser).  As of Express 4.16 it's bundled with Express
    })
    try {
        const newAuthor = await author.save()
        res.redirect(`authors/${newAuthor.id}`)
    } catch (e) {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating author'
        })
        console.log(e)
    }
})

//Show author route
router.get('/:id', async (req, res) => {
    try {
        const author = await Author.findById(req.params.id)
        const books = await Book.find({ author: author.id }).limit(6).exec()
        res.render('authors/show', {
            author: author,
            booksByAuthor: books
        })
    } catch {
        res.redirect('/')
    }
})

//Edit author page
router.get('/:id/edit', async (req, res) => {
    try {
        const author = await Author.findById(req.params.id)
        res.render('authors/edit', { author: author })
    } catch {
        res.redirect('/authors')
    }
})

//Edit author route
router.put('/:id', async (req, res) => {
    let author
    try {
        author = await Author.findById(req.params.id)
        author.name = req.body.name
        await author.save()
        res.redirect(`/authors/${author.id}`)
    } catch {
        if (author == null) {
            res.redirect('/')
        } else {
            res.render('authors/edit', {
                author: author,
                errorMessage: 'Error updating author'
            })
        }
    }
})

//Delete author route
router.delete('/:id', async (req, res) => { //NEVER ever use a get route to delete data; Google search crawlers will run every delete route and wreck your page
    let author
    try {
        author = await Author.findById(req.params.id)
        await author.remove()
        res.redirect('/authors')
    } catch {
        if (author == null) {
            res.redirect('/')
        } else {
            res.redirect(`/authors/${author.id}`)
        }
    }
})

module.exports = router