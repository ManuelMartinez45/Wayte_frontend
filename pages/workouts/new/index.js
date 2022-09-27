import { useAuth } from '../../../context/AuthContext'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { useState, useEffect } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import * as Styles from './NewWorkout.module.scss'

function newWorkout(){
    const { user, exercises } = useAuth()
    const [ searchTerm, setSearchTerm] = useState('')
    const [ sets, setSets ] = useState('')
    const [ reps, setReps ] = useState('')
    const [ filteredExercises, setFilteredExercises] = useState([])
    const [ dayExercises, setDayExercises ] = useState([])
    const [ days, setDays ] = useState([])
    const [ exerciseInputFields, setExerciseInputFields ] = useState([{
        'name': '',
        'sets': '',
        'reps': ''
    }]) 

    const addDay = (day) => {
        addExercise()
        setDays(days => [...days, dayExercises])
        setDayExercises([])
    }


    const handleFilter = (e) => {
        setSearchTerm(e.target.value.toLowerCase())
        const newFilter = exercises.filter((exercise) => {
            const { name, main, secondary, mechanics, equipment } = exercise 
            if(
                name.toLowerCase().includes(searchTerm) ||
                
                main.toLowerCase().includes(searchTerm) || 
                secondary.includes(searchTerm) ||
                mechanics.includes(searchTerm) ||
                equipment.includes(searchTerm)
            )  return exercise
        })

        setFilteredExercises(newFilter)
    }

    const showFilterResults = () => {
        return 
            filteredExercises.length != 0 && ( 
            <div className={Styles.exerciseResults}>
                {filteredExercises.map((exercise, key) => {
                    return <div onClick={exerciseSelect} name={exercise.name} className={Styles.dataItem} key={exercise._id}>{exercise.name}</div>
                })}
            </div>
        )
    }

    const exerciseSelect = (e) => {
        setSearchTerm(e.target.innerHTML)
        setFilteredExercises([])
    }

    const addExercise = () => {
        setDayExercises(dayExercises => [...dayExercises, {
            name: searchTerm,
            sets: sets,
            reps: reps
        }])
        setSearchTerm('')
        setSets('')
        setReps('')
    }

    const addDayExercise = (dayIndex) => {
        const allDays = [...days]
        const dayExercises = allDays[dayIndex]
        dayExercises.push({
            name: searchTerm,
            sets: sets,
            reps: reps
        })
        allDays.splice(dayIndex, 1, dayExercises)
        setDays(allDays)
    }

    const handleRemove = (index) => {
        const values = [...dayExercises]
        values.splice(index, 1)
        setDayExercises(values)
    }

    const handleDayExerciseRemove = (dayIndex, exerciseIndex) => {
        const allDays = [...days]
        const dayExercises = allDays[dayIndex]
        dayExercises.splice(exerciseIndex, 1)
        allDays.splice(dayIndex, 1, dayExercises)
        setDays(allDays)
    }

    const showInputs = (dayIndex) => {
        return exerciseInputFields.map((input, index) => (
                    <Row key={index}>
                        <Col>
                            <Form.Group>
                                <Form.Label onClick={() => setFilteredExercises('exercise')}>Exercise: </Form.Label>
                                <Form.Control name={'exercise' + dayIndex} placeholder="Search exercise, muscle group, equipment..." type='text' onChange={(e) => handleFilter(e)} value={searchTerm}/> 
                                { 
                                    filteredExercises.length != 0 && ( 
                                    <div className={Styles.exerciseResults}>
                                        {filteredExercises.map((exercise, key) => {
                                            return <div onClick={exerciseSelect} name={exercise.name} className={Styles.dataItem} key={exercise._id}>{exercise.name}</div>
                                        })}
                                    </div>
                                )} 
                                </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                            <Form.Label>Sets: </Form.Label>
                                <Form.Control 
                                    value={sets} 
                                    name="sets" 
                                    type='text' 
                                    onChange={(e) => {
                                        isNaN(e.target.value) ? alert('Not a Number') : setSets(e.target.value)
                                    }}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Reps: </Form.Label>
                                <Form.Control value={reps} name="reps" type='text' onChange={(e) => setReps(e.target.value)}/>
                            </Form.Group>
                        </Col>
                    </ Row>
                ))
            }

    return (
        <>
            <h1 id={Styles.header}>Create Workout</h1>
            <Form id={Styles.workoutForm}>
                <Form.Group id={Styles.formHeader}>
                    <Form.Label>Workout Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group id={Styles.formHeader}>
                    <Form.Label>Split Type: </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Container fluid>
                    {/* ********************* PreExercises Pre Day ******************** */}
            {   days.length > 0 ? days.map((day, dayIndex) => ( 
                <div key={dayIndex + 1}>
                    <h5>Day: {dayIndex + 1} </h5>
                    {
                    day.map((exercise, exerciseIndex) => (
                            <Row key={exerciseIndex}>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Exercise: </Form.Label>
                                        <Form.Control disabled placeholder="Search exercise, muscle group, equipment..." defaultValue={exercise.name}/>
                                    </Form.Group> 
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Sets: </Form.Label>
                                        <Form.Control  disabled defaultValue={exercise.sets}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Reps: </Form.Label>
                                        <Form.Control disabled defaultValue={exercise.reps} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Button onClick={(e) => handleDayExerciseRemove(dayIndex, exerciseIndex)} variant='danger'> - </Button>
                                </Col>
                            </Row>
                            
                            
                            ))}
                            {showInputs(dayIndex)}
                <Button onClick={(e) => addDayExercise(dayIndex)}> Add Exercise </Button>
                </ div>
            )) 
            : <></>} 
            </Container>
            {/* **************************** Pre Exercises Same Day ***************** */}
            <Container>
                <h5>Day: {days.length + 1}</h5>
                {/* <h5>Day: {days.length !== 0 ? days.length + 1 : 1 }</h5> */}
               {
                    dayExercises.map((exercise, index) => (
                            <Row key={index}>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Exercise: </Form.Label>
                                        <Form.Control disabled placeholder="Search exercise, muscle group, equipment..." defaultValue={exercise.name}/>
                                    </Form.Group> 
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Sets: </Form.Label>
                                        <Form.Control  disabled defaultValue={exercise.sets}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Reps: </Form.Label>
                                        <Form.Control disabled defaultValue={exercise.reps} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Button type='button' onClick={(e) => handleRemove(index)} value={index} variant='danger'> - </Button>
                                </Col>
                            </Row>
                ))}
            </Container>

                {showInputs(days.length)}

                <Button onClick={addExercise}> Add Exercise </Button>
                <Button onClick={ addDay }>Add Day</Button>
                <br />
                <Button>Create Workout</Button>
            </Form>
        </>
    )
}

export default newWorkout