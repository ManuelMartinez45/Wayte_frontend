import { Container, Row, Col } from 'react-bootstrap'
import * as Styles from './NutritionIndex.module.scss'
import { Fade } from 'react-awesome-reveal'

function nutritionIndex(){
    return (
        <Fade triggerOnce>
        <Container fluid>
            <Row>
            <Row>
                <Col 
                lg={{span: 6, offset: 2}}
                >
                        <h1 id={Styles.nutritionHeader}>Health &#38; Nutrition</h1>
                    
                </Col>
            </Row>
                <Col 
                    lg={{span: 8, offset: 1}}
                    md={{span: 8}}
                
                >       
                    <Row>
                        <Col 
                            lg={{span: 4}}
                            sm={6}   
                        >
                            <div className={Styles.threePiece}>
                                <h5 id={Styles.img1}>Lorem ipsum dolor sit amet consectetur
                                </h5>
                            </div>
                        </Col>
                        <Col 
                            lg={{span: 4}}
                            sm={6}
                        >
                            <div className={Styles.threePiece}>
                                <h5 id={Styles.img2}>Lorem ipsum dolor sit amet consectetur
                                </h5>
                            </div>
                        </Col>
                        <Col lg={{span: 4}}
                            sm={12}
                        >
                            <div className={Styles.threePiece}>
                                <h5 id={Styles.img3}>Lorem ipsum dolor sit amet consectetur
                                </h5>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{span: 6 }}
                        sm={6}>
                            <div className={Styles.twoPiece}>
                                <h5 id={Styles.img1}>Lorem ipsum dolor sit amet consectetur</h5>
                            </div>
                        </Col>
                        <Col lg={{span: 6}}
                            sm={6}
                        >
                            <div className={Styles.twoPiece}>
                                <h5 id={Styles.img2}>Lorem ipsum dolor sit amet consectetur</h5>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={{span: 3}}
                    md={3}
                    sm={12}
                    >
                    <div id={Styles.sideBar}>
                        <h5>Lorem Ipsum Dolor Sit</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus vel adipisci magni quisquam, consequuntur nesciunt eveniet architecto illo debitis voluptas autem placeat, qui quo inventore eaque saepe fuga, tempore delectus?
                        Voluptatem quae reprehenderit neque perspiciatis amet aliquid qui, deserunt in ducimus repudiandae, aliquam corporis quia recusandae necessitatibus ad mollitia ab fugiat! Impedit quae, minus suscipit ullam blanditiis possimus voluptatem! Aliquam?
                        </p>
                        <hr />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={{span: 8, offset: 2}}>
                    <div id={Styles.quoteRow}>
                        <h4>
                        &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate aliquam repudiandae optio sapiente dolorem qui cupiditate placeat ut cum error excepturi, &quot;
                        <br />
                        </h4>
                        <h5>- John Doe</h5>
                    </div>
                </Col>
            </Row>
                <Row>
                    <Col lg={{span: 10, offset: 1}}>
                        <Row>

                        <Col lg={{span: 3}}>
                        <div className={Styles.fourPiece}>
                                <h6 id={Styles.img1}>Lorem ipsum dolor sit amet consectetur
                                </h6>
                            </div>
                        </Col>
                        <Col lg={{span: 3}}>
                        <div className={Styles.fourPiece}>
                                <h6 id={Styles.img2}>Lorem ipsum dolor sit amet consectetur
                                </h6>
                            </div>
                        </Col>
                        <Col lg={{span: 3}}>
                        <div className={Styles.fourPiece}>
                                <h6 id={Styles.img3}>Lorem ipsum dolor sit amet consectetur
                                </h6>
                            </div>
                        </Col>
                        <Col lg={{span: 3}}>
                        <div className={Styles.fourPiece}>
                                <h6 id={Styles.img4}>Lorem ipsum dolor sit amet consectetur
                                </h6>
                            </div>
                        </Col>
                        </Row>
                    </Col>
                    </Row>
                <Row>
                    <Col lg={{span: 10, offset: 1}}>
                        <Row>

                        <Col lg={{span: 3}}>
                        <div className={Styles.fourPiece}>
                                <h6 id={Styles.img5}>Lorem ipsum dolor sit amet consectetur
                                </h6>
                            </div>
                        </Col>
                        <Col lg={{span: 3}}>
                        <div className={Styles.fourPiece}>
                                <h6 id={Styles.img6}>Lorem ipsum dolor sit amet consectetur
                                </h6>
                            </div>
                        </Col>
                        <Col lg={{span: 3}}>
                        <div className={Styles.fourPiece}>
                                <h6 id={Styles.img7}>Lorem ipsum dolor sit amet consectetur
                                </h6>
                            </div>
                        </Col>
                        <Col lg={{span: 3}}>
                        <div className={Styles.fourPiece}>
                                <h6 id={Styles.img8}>Lorem ipsum dolor sit amet consectetur
                                </h6>
                            </div>
                        </Col>
                        </Row>
                    </Col>
                    </Row>
        </Container>
        </Fade>       
    )
}

export default nutritionIndex