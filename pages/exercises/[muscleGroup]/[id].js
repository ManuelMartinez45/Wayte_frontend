import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-haiku'
import { Container, Row, Col } from 'react-bootstrap'
import * as Styles from './Exercise.module.scss'
import Cookie from 'js-cookie'
import {parseCookies} from '../../../lib/parseCookies'

function Exercise ({ initialExerciseValue }){

    const router = useRouter()
    const { id } = router.query

    const largeBreakpoint = useMediaQuery('(min-width: 992px)')
    const mediumBreakpoint = useMediaQuery('(max-width: 991px) and (min-width:  768px)')
    const smallBreakpoint = useMediaQuery('(max-width: 767px) and (min-width: 576px)')
    const xsmallBreakpoint = useMediaQuery('(max-width: 575px)')

    const [exercise, setExercise] = useState(() => JSON.parse(initialExerciseValue))
    const exerciseURL = 'https://wayte-backend.herokuapp.com/'

    
    async function getExercise(){
        const response = await fetch(exerciseURL)
        const data = await response.json()
        
        for(let info of data){
            if(info._id === id) setExercise(info)
        }
        
    }

    const screenSize = () => {
        if(largeBreakpoint) return Styles.large
        if(mediumBreakpoint) return  Styles.medium
        if(smallBreakpoint) return Styles.small
        if(xsmallBreakpoint) return  Styles.xsmall
    }
    
    useEffect(() => {
        getExercise()
        Cookie.set('exercise', JSON.stringify(exercise))
    }, [])

    
    const secondaryDisplay = () => {
        if(exercise.secondary && exercise.secondary.length > 1) return exercise.secondary.join(', ')
        return exercise.secondary
    }
    
    const performDisplay = () => {
        let count = 0
        if(exercise.perform){
            return exercise.perform.map((step) => (
                <li key={count += 1} >{step}</li>
                ))}
            }
            
            const exerciseInfoDisplay = () => {
                if(xsmallBreakpoint){
                    return (
                        <Col>
                    <div id={Styles.exerciseInfo}>
                        <Row>
                            <Col>
                                <h4>Main: {exercise.main}</h4>
                            </Col>
                            <Col>
                                <h4>Primary: {exercise.primary}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Secondary: {secondaryDisplay()}</h4>
                            </Col>
                            <Col>
                                <h4>Mechanics: {exercise.mechanics}</h4>
                            </Col>
                        </Row>
                    </ div>
                </Col>
            )
        } else{
            return (
                <div id={Styles.exerciseInfo}>
                        <h4>Main: <span id={Styles.exerciseSpan}>{exercise.main}</span></h4>
                        <h4>Primary:  <span id={Styles.exerciseSpan}>{exercise.primary}</span></h4>
                        <h4>Secondary:  <span id={Styles.exerciseSpan}>{secondaryDisplay()}</span></h4>
                        <h4>Mechanics: <span id={Styles.exerciseSpan}>{exercise.mechanics}</span>
                        </h4>
                            
                    </div>
            )
        }
    }
    

    return (
        <Container id={screenSize()} fluid>
            <Row>
                <h1 id={Styles.exerciseTitle}>{exercise.name}</h1>
            </Row>
            <Row>
                <Col 
                    sm={{span: 6, offset: 1}}
                    xs={{span: 11, offset: 1}}
                    >
                    <img id={Styles.exerciseImg} src={exercise.img} alt={exercise.name} />
                </Col>

                <Col 
                    // lg={{span: 3, offset: 1}}
                    // md={{span: 3, offset: 1}}
                    sm={{span: 3, offset: 1}}
                    xs={{span: 9, offset: 2}}
                    >
                    {exerciseInfoDisplay()}
                </Col>
            </Row>
            
            <Row>
                <Col
                    // lg={{span: 10, offset: 1}}
                    // md={{span: 10, offset: 1}}
                    sm={{span: 10, offset: 1}}
                    xs={{span: 10, offset: 1}}
                    >
                    <div id={Styles.exercisePerform}>
                        <h4>Perform: </h4>
                        <ol>
                            {performDisplay()}
                        </ol>
                    </div>
                </Col>
            </Row>

        </ Container>
    )
    
}

Exercise.getInitialProps = ({ req }) => {
    const cookies = parseCookies(req)

    return {
        initialExerciseValue: cookies.exercise
    }
}

export default Exercise