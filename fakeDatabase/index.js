/* YOU DO NOT NEED TO EDIT THIS FILE. */
const allWorkouts = require('./workout')
const allExercises = require('./exercise')

// We don't want two exercises or two workouts to have the same id.
// This helper function finds the highest id and returns that + 1
const nextId = (arr) => {
  return 1 + arr.reduce((highestId, obj) => {
    if (obj.id > highestId) return obj.id
    return highestId
  }, -Infinity)
}

const deleteById = (table, id) => {
  const matchingId = table.map(row => row.id).indexOf(id)
  if (matchingId < 0) return null
  table.splice(matchingId, 1)
  return table.length
}

/* The objects below mimic the behavior of Sequelize models.
   But they DO NOT actually connect to a real database.
   We'll connect to a real database in a later step. */
const Workout = {
  findAll: () => allWorkouts,
  findByPk: (id) => {
    const found = allWorkouts.find(workout => workout.id === id)
    if (!found) return null
    return { ...found, destroy: () => deleteById(allWorkouts, id) }
  },
  create: (newWorkout) => {
    allWorkouts.push({ id: nextId(allWorkouts), ...newWorkout })
    return allWorkouts[allWorkouts.length - 1]
  },
}

const Exercise = {
  findAll: () => allExercises,
  findByPk: (id) => {
    const found = allExercises.find(exercise => exercise.id === id)
    if (!found) return null
    return { ...found, destroy: () => deleteById(allExercises, id) }
  },
  create: (newExercise) => {
    allExercises.push({ id: nextId(allExercises), ...newExercise })
    return allExercises[allExercises.length - 1]
  },
}

module.exports = {
  Workout,
  Exercise,
}
