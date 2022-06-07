import * as React from 'react';
import * as Styles from './HeaderNav.module.scss'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"


export default function HeaderNav(){
        return (
            <>
              <Navbar id={Styles.Navbar} expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/" id={Styles.logo}>Wayte</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/exercises/all" className={Styles.navLink}>
                            Exercise
                        </Nav.Link>
                        <Nav.Link href="/nutrition" className={Styles.navLink}>
                            Nutrition
                        </Nav.Link>
                        <Nav.Link href="#" className={Styles.navLink}>
                            Health
                        </Nav.Link>
                        <Nav.Link href="#" className={Styles.navLink}>
                            Shop
                        </Nav.Link>
                        <Nav.Link href="#" className={Styles.navLink}>
                            Workouts
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-light"
                        id={Styles.searchBtn}>Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </>
        )
}