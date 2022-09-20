import { useAuth } from '../../../context/AuthContext'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { useState, useEffect } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import * as Styles from './NewWorkout.module.scss'

function newWorkout(){
    const { user, exercises } = useAuth()
    // const [ userWorkouts, setUserWorkouts ] = useState([])
    const [ searchTerm, setSearchTerm] = useState('')
    const [ sets, setSets ] = useState('')
    const [ reps, setReps ] = useState('')
    const [ filteredExercises, setFilteredExercises] = useState([])
    const [ preExercises, setPreExercises ] = useState([])
    const [ days, setDays ] = useState([])
    const [ dayCount, setDayCount ] = useState(1)
    const [ exerciseInputFields, setExerciseInputFields ] = useState([{
        'name': '',
        'sets': '',
        'reps': ''
    }]) 

    
    // const getWorkouts = async () => {
    //     const querySnapshot = await getDocs(collection(db, "workouts"));
    //     querySnapshot.forEach((doc) => {
    //         const data = doc.data()
    //         if(doc.data().user === user.uid) setUserWorkouts(userWorkouts => [...userWorkouts, data])
    //     })
    // }


    const addDay = (day) => {
        addExercise()
        setDays(days => [...days, preExercises])
        setPreExercises([])
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

    const exerciseSelect = (e) => {
        setSearchTerm(e.target.innerHTML)
        setFilteredExercises([])
    }

    const addExercise = () => {
        // e.preventDefault()
        // setExerciseInputFields([...exerciseInputFields, {
        //     name: '',
        //     sets: '',
        //     reps: ''
        // }])
        setPreExercises(preExercises => [...preExercises, {
            name: searchTerm,
            sets: sets,
            reps: reps
        }])
        setSearchTerm('')
        setSets('')
        setReps('')
    }

    // useEffect(() => {
    //     getWorkouts()
    // }, [])


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
            {   days.length > 0 ? days.map((day, index) => ( 
                <div key={index + 1}>
                    <h5>Day:{index + 1} </h5>
                    {
                    day.map((exercise, key) => (
                            <Row key={key}>
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
                            </Row>
                ))}
                <h5>Day: { days.length + 1}</h5>
                </ div>
            )) : 
            <>
                    <h5>Day: 1</h5>
                    {
                    preExercises.map((exercise, key) => (
                            <Row key={key}>
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
                            </Row>
                ))}
                </>
                } 
            </Container>
            <Container>
            {
                exerciseInputFields.map((input, key) => (
                    <Row key={key}>
                        <Col>
                            <Form.Group>
                                <Form.Label onClick={() => setFilteredExercises('exercise')}>Exercise: </Form.Label>
                                <Form.Control name="exercise" placeholder="Search exercise, muscle group, equipment..." type='text' onChange={handleFilter} value={searchTerm}/> 
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
                                <Form.Control value={sets} name="sets" type='text' onChange={(e) => setSets(e.target.value)}/>
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
            </Container>



                <Button onClick={addExercise}> Add Exercise </Button>
                <Button onClick={ addDay }>Add Day</Button>
                <br />
                <Button>Create Workout</Button>
            </Form>
        </>
    )
}

export default newWorkout