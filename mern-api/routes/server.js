const express = require('express')
const router = express.Router()
const Workout = require('../model/workoutModel')
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controller/workoutController')





router.get('/workouts' ,getWorkouts)
router.post('/workouts' , createWorkout)
router.get('/workouts/:id' , getWorkout)

router.delete('/workouts/:id' ,deleteWorkout)

router.patch('/workouts/:id' ,updateWorkout)


module.exports = router 