const express = require('express')
const { Exercise } = require('../fakeDatabase')
const router = express.Router()

// GET all exercises
router.get('/', (req, res, next) => {
  res.json(Exercise.findAll())
})

// GET a single exercise by id
router.get('/:id', (req, res, next) => {
  const exercise = Exercise.findByPk(+req.params.id)
  if (!exercise) return res.sendStatus(404)
  res.json(exercise)
})

// POST a new exercise
router.post('/', (req, res, next) => {
  const { name, completed, description } = req.body
  res.status(201)
  res.json(Exercise.create({ name, completed, description }))
})

// DELETE an exercise by id
router.delete('/:id', (req, res, next) => {
  const exercise = Exercise.findByPk(+req.params.id)
  if (!exercise) return res.sendStatus(404)
  exercise.destroy()
  res.sendStatus(204)
})

module.exports = router
