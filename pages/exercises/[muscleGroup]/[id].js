import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
// import { useMediaQuery } from 'react-haiku'
import { Container, Row, Col } from 'react-bootstrap'
import * as Styles from './Exercise.module.scss'
import Image from 'next/image'

function Exercise ({ initialExerciseValue }){

    const router = useRouter()
    const { id } = router.query

    // const largeBreakpoint = useMediaQuery('(min-width: 992px)')
    // const mediumBreakpoint = useMediaQuery('(max-width: 991px) and (min-width:  768px)')
    // const smallBreakpoint = useMediaQuery('(max-width: 767px) and (min-width: 576px)')
    // const xsmallBreakpoint = useMediaQuery('(max-width: 575px)')

    const [exercise, setExercise] = useState([])
    const exerciseURL = 'https://wayte-backend.herokuapp.com/'
    let exerciseIMG
    
    async function getExercise(){
        const response = await fetch(exerciseURL)
        const data = await response.json()
        
        for(let info of data){
            if(info._id === id) setExercise(info)
        }
        
    }

    // const screenSize = () => {
    //     if(largeBreakpoint) return Styles.large
    //     if(mediumBreakpoint) return  Styles.medium
    //     if(smallBreakpoint) return Styles.small
    //     if(xsmallBreakpoint) return  Styles.xsmall
    // }
    
    useEffect(() => {
        async function getExercise(){
            const response = await fetch(exerciseURL)
            const data = await response.json()
            
            for(let info of data){
                if(info._id === id) setExercise(info)
            }
            
        }
        getExercise()
    },[])
    
    exerciseIMG = exercise.img

    console.log(exerciseIMG)
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
                if(!exercise){
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
        <Container fluid>
        {/* <Container id={screenSize()} fluid> */}
            <Row>
                <h1 id={Styles.exerciseTitle}>{exercise.name}</h1>
            </Row>
            <Row>
                <Col 
                    sm={{span: 6, offset: 1}}
                    xs={{span: 11, offset: 1}}
                    >
                    <Image 
                    id={Styles.exerciseImg} 
                    loader={() => exerciseIMG} 
                    src='exerciseIMG'
                    width={250}
                    height={150}
                    layout='responsive'
                    alt={exercise.name} />
                </Col>

                <Col 
                    sm={{span: 3, offset: 1}}
                    xs={{span: 9, offset: 2}}
                    >
                    {exerciseInfoDisplay()}
                </Col>
            </Row>
            
            <Row>
                <Col
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

// Exercise.getInitialProps = ({ req }) => {
//     const cookies = parseCookies(req)

//     return {
//         initialExerciseValue: cookies.exercise
//     }
// }

export default Exercise