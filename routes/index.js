const db = require('../config/db')
const { link } = require('../models')
const express = require('express')
const router = express.Router()
const { eq } = require('drizzle-orm')

function convertToSlug(text) {
  return text.toLowerCase().replace(/\s+/g, '-')
}
  
router.get('/', async function(req, res, next) {
  const links = await db.select().from(link).orderBy(link.hash)
  res.render('index', { title: 'Your URL shortener 🔗', links })
})

router.get('/ping', async function(req, res, next) {
  res.send('pong')
})

router.post('/add', async function(req, res, next) {
  const { href, hash, code } = req.body
  if (code !== '12345') {
    res.status(401).send('Unauthorized')
    return
  }
  await db.insert(link).values({
    href,
    hash: convertToSlug(hash)
  }).execute()
  res.redirect('/')
})

router.get('/:hash', async function(req, res, next) {
  const { hash } = req.params
  const linkSerch = await db.select().from(link).where(eq(link.hash, hash))
  if (!linkSerch[0]) {
    res.status(404).send('Not found')
    return
  }
  res.redirect(linkSerch[0].href)
})

module.exports = router
