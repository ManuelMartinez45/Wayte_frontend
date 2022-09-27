import { useRouter } from 'next/router'
import { useAuth } from '../../context/AuthContext'
import {Card, Button, Container, Col, Row} from 'react-bootstrap'
import Link from 'next/link'
import * as Styles from './Search.module.scss'
import { useState, useEffect } from 'react'

const Search = () =>{
    const router = useRouter()
    const { exercises } = useAuth()
    const { search } = router.query
    const searchTerm = search.split(' ')[0].toLowerCase()
    const [displayExercises, setDisplayExercises] = useState([])

    const getExercises = () => {
        for(let exercise of exercises){
            const { main, name, secondary, mechanics, equipment } = exercise
                    if(
                        !displayExercises.includes(exercise) &&
                        name.toLowerCase().includes(searchTerm) ||
                        main.toLowerCase().includes(searchTerm) || 
                        secondary.includes(searchTerm) ||
                        mechanics.includes(searchTerm) ||
                        equipment.includes(searchTerm)
                    )  setDisplayExercises(displayExercises => [...displayExercises, exercise])
        }
    }

    useEffect(() => {
        getExercises()
    }, [])
    console.log(displayExercises)

    return (
        <>
            <h4 id={Styles.searchHeader}>Search Results for "<span id={Styles.searchTerm}>{search}</span>": </h4>
            <Container fluid id={Styles.body}>
                <Row>
                    { displayExercises.map((exercise) => (
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
                </Row>

            </Container>
        
        </>
    )
}

export default Search