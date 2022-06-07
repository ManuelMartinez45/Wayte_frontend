import { useEffect, useState } from 'react'
import { Carousel, Card, Button, Container, Col, Row} from 'react-bootstrap'
import * as Styles from './ExerciseIndex.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function ExerciseIndex(){
    const [exercises, setExercises] = useState([])
    const exerciseURL = 'https://wayte-backend.herokuapp.com/'
    const muscleGroups = []
    const router = useRouter()
    const { muscleGroup } = router.query 

    async function getExercises(){
        const response = await fetch(exerciseURL)
        const data = await response.json()
        setExercises(data)
    }

    useEffect(() => {
        getExercises()

    }, [])

    const getMuscleGroups = () => {
        exercises.forEach((exercise) => {
            if(!(muscleGroups.includes(exercise.main)) && exercise.main !== 'Shoulder') muscleGroups.push(exercise.main)
        })
    }

    getMuscleGroups()

    const muscleGroupDisplay = () => {
        return muscleGroups.sort().map( (muscle) => (
            <Col key={muscle} lg={2} md={2} sm={2} xs={2}>
                <h5 >
                    <Link href={`/exercises/${muscle}`}>
                        <a>{muscle}</a>
                    </Link>
                </h5>
            </Col>
        ))
    }

    const allExerciseDisplay = () => {
        return exercises.sort().map( (exercise) => (
            <Col md={4} sm={6} xs={12} key={exercise._id}>
                <Card className={Styles.card} key={exercise._id}>
                    <Card.Img variant="top" src={exercise.img} />
                    <Card.Body>
                        <Button className={Styles.cardBtn} variant="outline-danger">
                            <Link href={`/exercises/${exercise.main}/${exercise._id}`}>
                                <a>
                                    {exercise.name}
                                </a>
                            </Link>
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        ))
    }
    const muscleGroupExerciseDisplay = () => {
        const exerciseList = exercises.filter(exercise => exercise.main.toLowerCase() === muscleGroup.toLowerCase())

        return exerciseList.sort().map( (exercise) => (
            <Col lg={3} md={4} sm={6} xs={12} key={exercise._id}>
                <Card className={Styles.card} key={exercise._id}>
                    <Card.Img variant="top" src={exercise.img} />
                    <Card.Body>
                        <Button className={Styles.cardBtn} variant="outline-danger">
                            <Link href={`/exercises/${exercise.main}/${exercise._id}`}>
                                <a>
                                    {exercise.name}
                                </a>
                            </Link>
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        ))
    }

    
    return (
        <>
            <Carousel id={Styles.carousel} controls={false} indicators={false} interval={2500} fade={true}>
                <Carousel.Item>
                    <img src="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://business.uoregon.edu/sites/business1.uoregon.edu/files/styles/banner/public/news/Enews-Covid-Gym-Safety-thumb-202101.jpg?itok=kFFfNUfR" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                            <img
                            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guy-training-at-the-gym-royalty-free-image-979026970-1561129165.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            src="https://www.muscleandfitness.com/wp-content/uploads/2019/07/Hands-Clapping-Chaulk-Kettlebell.jpg?quality=86&strip=all"
                            alt="Third slide"
                            />
                        </Carousel.Item>
            </Carousel>

            <h1 id={Styles.title}>
                {muscleGroups.includes(muscleGroup) ? muscleGroup : 'Exercise Guide List'}
            </h1>
            <Container fluid>

            <Row id={Styles.muscleHeader} >
                { muscleGroupDisplay()}
            </Row>
            
            <hr id={Styles.hr}/>

                <Row id={Styles.exerciseDisplay}>
                    {muscleGroups.includes(muscleGroup) ? muscleGroupExerciseDisplay() : allExerciseDisplay()}
                </Row>
            </Container>
            

            
        </>
    )
}