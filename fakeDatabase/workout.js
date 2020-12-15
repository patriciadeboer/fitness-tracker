/* YOU DO NOT NEED TO EDIT THIS FILE. */

const yesterday = new Date(Date.now() - 24 * 60 * (60 * 1000))
const nextWeek = new Date(Date.now() + 7 * 24 * 60 * (60 * 1000))

// Mock workouts
module.exports = [
  {
    id: 1,
    name: "Work the Core",
    date: yesterday,
  },
  {
    id: 2,
    name: "Leg Day",
    date: nextWeek,
  },
]
