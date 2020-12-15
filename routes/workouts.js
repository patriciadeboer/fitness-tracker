const express = require('express')
const { Workout } = require('../fakeDatabase')
const router = express.Router()

// GET all workouts
router.get('/', (req, res, next) => {
  res.json(Workout.findAll())
})

// GET a single workout by id
router.get('/:id', (req, res, next) => {
  const workout = Workout.findByPk(+req.params.id)
  if (!workout) return res.sendStatus(404)
  res.json(workout)
})

// POST a new workout
router.post('/', (req, res, next) => {
  const { name, date } = req.body
  res.status(201)
  res.json(Workout.create({ name, date }))
})

// DELETE a workout by id
router.delete('/:id', (req, res, next) => {
  const workout = Workout.findByPk(+req.params.id)
  if (!workout) return res.sendStatus(404)
  workout.destroy()
  res.sendStatus(204)
})

module.exports = router
